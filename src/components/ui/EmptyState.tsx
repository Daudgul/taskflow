type EmptyStateProps = {
  title: string;
  description: string;
};

function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex h-64 flex-col items-center justify-center text-center">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>

      <p className="mt-2 max-w-sm text-slate-500">{description}</p>
    </div>
  );
}

export default EmptyState;
