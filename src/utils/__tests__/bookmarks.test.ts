import { getBookmarks, isBookmarked, removeBookmark, toggleBookmark } from '../bookmarks';

// The continuity stores talk to window.localStorage; the test environment
// is node, so a minimal in-memory stand-in is stubbed per test.
function stubStorage() {
  const store = new Map<string, string>();
  vi.stubGlobal('window', {
    localStorage: {
      getItem: (k: string) => (store.has(k) ? store.get(k)! : null),
      setItem: (k: string, v: string) => {
        store.set(k, String(v));
      },
      removeItem: (k: string) => {
        store.delete(k);
      },
    },
  });
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('bookmarks shelf', () => {
  it('toggles one verse on and off, reporting the new state', () => {
    stubStorage();
    expect(toggleBookmark('samkhya', 'samkhya-karika', '1')).toBe(true);
    expect(isBookmarked('samkhya', 'samkhya-karika', '1')).toBe(true);
    expect(toggleBookmark('samkhya', 'samkhya-karika', '1')).toBe(false);
    expect(isBookmarked('samkhya', 'samkhya-karika', '1')).toBe(false);
    expect(getBookmarks()).toEqual([]);
  });

  it('retires the oldest entry when a full shelf gains one more', () => {
    stubStorage();
    for (let i = 0; i < 200; i++) {
      toggleBookmark('s', 't', `v${i}`);
    }
    expect(getBookmarks()).toHaveLength(200);
    // The 201st bookmark must be kept (reported saved) while the oldest
    // retires — never the reverse.
    expect(toggleBookmark('s', 't', 'v-new')).toBe(true);
    const ids = getBookmarks().map((b) => b.verseId);
    expect(ids).toHaveLength(200);
    expect(ids).toContain('v-new');
    expect(ids).not.toContain('v0');
    expect(ids).toContain('v1');
  });

  it('removes a single entry for shelf management', () => {
    stubStorage();
    toggleBookmark('s', 't', 'a');
    toggleBookmark('s', 't', 'b');
    removeBookmark('s', 't', 'a');
    expect(getBookmarks().map((b) => b.verseId)).toEqual(['b']);
  });
});
