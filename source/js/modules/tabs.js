export const takeControlTabs = () => {
  const tabs = document.querySelectorAll('.tabs');

  if (tabs.length > 0) {
    tabs.forEach((tab) => {
      const tabsTitles = tab.querySelectorAll('.tabs__title');
      const tabsContents = tab.querySelectorAll('.tabs__content');

      if (tabsContents.length > 0) {
        tabsTitles.forEach((elem, i) => {
          elem.addEventListener('click', function (e) {
            tabsClose();
            elem.classList.add('_active');
            tabsContents[i].classList.add('_active');
          });
        });

        const tabsClose = () => {
          tabsTitles.forEach((elem) => {
            elem.classList.remove('_active');
          });
          tabsContents.forEach((elem) => {
            elem.classList.remove('_active');
          });
        };
      }
    });
  }


};
