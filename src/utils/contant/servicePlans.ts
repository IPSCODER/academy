export const servicePlans = [
    {
      title: "Basic",
      features: [
        "Daily tips",
        "1 webinar from industry expert per month",
        "Personalised guidance five times a month",
        "20% Discount coupon for personalised counselling session",
      ],
      plans: [
        { name: "Monthly", originalPrice: 1500, discountedPrice: 1200 },
        { name: "Quarterly", originalPrice: 3750, discountedPrice: 3200 },
        { name: "Semi Yearly", originalPrice: 6250, discountedPrice: 5200 },
        { name: "Yearly", originalPrice: 9500, discountedPrice: 8200 },
      ],
    },
    {
      title: "Premium Package",
      features: [
        "Daily tips",
        "1 webinar from industry expert per month",
        "Personalised guidance five times a month",
        "20% Discount coupon for personalised counselling session",
        "Aptitude Enhancement Classes (2 classes daily, 5 days a week)",
      ],
      plans: [
        { name: "Monthly", originalPrice: 4000, discountedPrice: 3200 },
        { name: "Quarterly", originalPrice: 10000, discountedPrice: 8000 },
        { name: "Semi Yearly", originalPrice: 20000, discountedPrice: 14000 },
        { name: "Yearly", originalPrice: 32500, discountedPrice: 16500 },
      ],
    },
    {
      title: "Counselling Session",
      features: [
        "Parenting Guidance",
        "Child Behaviour Therapy",
        "Child Academic Guidance",
        "Special Education",
      ],
      plans: [{ name: "Per Session", originalPrice: 0, discountedPrice: 3500 }],
    },
  ];