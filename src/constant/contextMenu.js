export const openContextMenu = (i) => {
  setReadModal(!readmodal);
  setIndex(i);
  const rect = document
    .getElementById(`notificationMenu${i}`)
    .getBoundingClientRect();
  setTimeout(() => {
    const menu = document.getElementById(`contextNotification${i}`);
    if (menu !== null) {
      menu.style.top = `${rect.top - 30}px`;
      menu.style.position = 'fixed';
    }
  }, 100);
};
