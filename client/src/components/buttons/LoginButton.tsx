export const LoginButton = () => {
  const open = () => {
    const modal = document.getElementById("login") as HTMLDialogElement;
    modal.showModal();
    modal.classList.add("active");
  };

  return (
    <button className="login" onClick={open}>
      Login
    </button>
  );
};
