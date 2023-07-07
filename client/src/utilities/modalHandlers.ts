export function open(type: string): void {
  const modal = document.getElementById(type) as HTMLDialogElement;
  modal.showModal();
  modal.classList.add("active");
}

export function close(type: string): void {
  const modal = document.getElementById(type) as HTMLDialogElement;
  modal.classList.remove("active");
  setTimeout(() => {
    modal.close();
  }, 200);
}