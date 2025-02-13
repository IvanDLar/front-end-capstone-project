import styles from "./menu.module.css";

export default function MenuPage() {

    // TODO: Add a mock API call for menu items, as if they came form a DB.
  const menuData = [
    {
      sectionTitle: "Salads & Starters",
      items: [
        {
          title: "Greek Salad",
          price: "$9.99",
          description:
            "A crisp medley of cucumbers, tomatoes, olives, and red onions, topped with tangy feta and drizzled with a fresh lemon-olive oil dressing.",
        },
        {
          title: "Spanakopita",
          price: "$6.99",
          description:
            "Flaky phyllo pastries stuffed with spinach and feta cheese, baked to a crisp golden perfection.",
        },
      ],
    },
    {
      sectionTitle: "Main Courses",
      items: [
        {
          title: "Lime Beef",
          price: "$15.99",
          description:
            "Succulent cuts of beef marinated in a bright lemon blend and aromatic herbs, then perfectly seared to lock in a tangy, savory flavor in every bite.",
        },
        {
          title: "Moussaka",
          price: "$14.99",
          description:
            "Layers of eggplant, ground meat, and creamy béchamel sauce, baked into a hearty, comforting Greek classic.",
        },
      ],
    },
    {
      sectionTitle: "Desserts",
      items: [
        {
          title: "Lemon Pie",
          price: "$5.99",
          description:
            "A buttery, flaky crust cradles a velvety lemon filling, striking the perfect balance between tang and sweetness in every slice.",
        },
        {
          title: "Baklava",
          price: "$4.99",
          description:
            "Layered phyllo dough with chopped nuts, sweetened with honey or syrup, delivering a flaky, sweet delight.",
        },
      ],
    },
  ];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Our Menu</h1>

      {/* Loop over each section */}
      {menuData.map((section, idx) => (
        <section key={idx} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.sectionTitle}</h2>

          {/* Loop over items within each section */}
          <div className={styles.menuList}>
            {section.items.map((item, index) => (
              <div className={styles.menuItem} key={index}>
                <div className={styles.menuItemHeader}>
                  <h3 className={styles.menuItemTitle}>{item.title}</h3>
                  <span className={styles.menuItemPrice}>{item.price}</span>
                </div>
                <p className={styles.menuItemDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
