export default async ({ addon }) => {
  var element = await addon.tab.waitForElement("div.inner.mod-splash > div.box > div.box-header > h4", {
    markAsSeen: true,
  });

  element.textContent = "Dumpster Fire";
};
