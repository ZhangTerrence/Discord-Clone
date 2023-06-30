export const SignupButton = () => {
  const open = () => {
    const modal = document.getElementById("signup") as HTMLDialogElement;
    modal.showModal();
    modal.classList.add("active");
  };

  return (
    <button className="signup" onClick={open}>
      Signup
    </button>
  );
};
