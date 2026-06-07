type ErrorStateProps = {
  message?: string;
};

function ErrorState({ message = "Something went wrong" }: ErrorStateProps) {
  return (
    <div className="flex h-64 items-center justify-center">
      <p className="text-slate-500">{message}</p>
    </div>
  );
}

export default ErrorState;
