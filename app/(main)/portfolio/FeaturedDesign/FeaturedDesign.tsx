import { DesignWorkCard, DesignWorkCards } from "./Card";
import { getWorks } from "./fetch";

/**
 * Featured designs.
 */
export async function FeaturedDesign() {
  const designs = await getWorks();

  return (
    <DesignWorkCards>
      {designs.map(({ id, ...props }) => (
        <DesignWorkCard key={id} {...props} />
      ))}
    </DesignWorkCards>
  );
}
