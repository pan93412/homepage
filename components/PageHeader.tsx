/**
 * The properties of {@link PageHeader}
 */
export interface PageHeaderProps {
  /**
   * The title of this page.
   */
  title: string;

  /**
   * The description of this page.
   */
  description: string;
}

/**
 * The header block (title & description) of a page.
 */
export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-4 w-full space-y-1 rounded-2xl bg-neutral-800 p-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>{description}</p>
    </header>
  );
}

export default PageHeader;
