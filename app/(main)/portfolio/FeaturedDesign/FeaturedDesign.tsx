import { DesignWorkCard, DesignWorkCards } from "./Card";

/**
 * Featured designs.
 */
export async function FeaturedDesign() {
  return (
    <DesignWorkCards>
      <DesignWorkCard
        name="Windows 95"
        description={
          <>
            Anim duis mollit occaecat consequat anim sint labore Lorem eu est
            amet nulla. Velit esse deserunt aliqua quis aute et elit incididunt
            tempor officia voluptate consequat. Veniam aliqua amet eu ullamco
            fugiat veniam nostrud officia laborum.
          </>
        }
        date={new Date("1995-08-24")}
        designUrl="https://microsoft.com"
        imageUrl="https://picsum.photos/seed/1671019928626/1024/1024"
      />
    </DesignWorkCards>
  );
}
