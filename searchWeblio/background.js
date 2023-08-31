chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'searchWeblio',
      title: 'Weblio で検索',
      contexts: ['all']
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'searchWeblio') {
//現在タブの右隣に開く
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            let tabIndex = tabs[0].index;
//タブを開く、実行
            chrome.tabs.create({index: tabIndex+1, url: "https://thesaurus.weblio.jp/content/" + encodeURIComponent(info.selectionText) });  
        });
    }
});