const ErrorMsg = ({ message }) => {
  if (!message) return null;

  return (
    <div className="auth-erreur">
      <strong>[!]</strong>
      <span>{message}</span>
    </div>
  );
};
export default ErrorMsg;