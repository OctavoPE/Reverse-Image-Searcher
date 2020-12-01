//console.log("Extension loaded...");

browser.menus.create({
  id: "findImg",
  title: "Search for this image",
  contexts: ["image"]
});

browser.menus.onClicked.addListener(async function (info, tab){
  if(info.menuItemId == "findImg"){
    if (info.srcUrl){
      let imgUrl = info.srcUrl;
      let googlePrefix = "https://www.google.com/searchbyimage?image_url=";
      let yandexPrefix = "https://yandex.com/images/search?source=collection&&url=";
      let yandexSuffix = "&rpt=imageview";
      let bingPrefix = "https://www.bing.com/images/searchbyimage?FORM=IRSBIQ&cbir=sbi&imgurl=";

      let yandexTab = await browser.tabs.create({ 'active': false, 'url': yandexPrefix+imgUrl+yandexSuffix, 'index': tab.index+1 });
      let bingTab = await browser.tabs.create({ 'active': false, 'url': bingPrefix+imgUrl, 'index': tab.index+1 });
      let googleTab = await browser.tabs.create({ 'active': false, 'url': googlePrefix+imgUrl, 'index': tab.index+1 });
    }
  }
});
