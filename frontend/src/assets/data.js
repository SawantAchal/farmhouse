import room1 from "./room7.jpeg";
import room2 from "./bathroom.jpeg";
import room3 from "./pool.jpeg";
import room4 from "./lobby.jpeg";
import img1 from "./entry.jpeg";
import img2 from "./villa_pool.jpeg";
import img3 from "./room-3.jpeg";
import img4 from "./room-4.jpeg";
import img5 from "./room-5.jpeg";
import img6 from "./double_basic.jpeg";
import img7 from "./double_standard.jpeg";
import img8 from "./double_deluxe.jpeg";
import img9 from "./room-9.jpeg";
import img10 from "./room-10.jpeg";
import img11 from "./family_standard.jpeg";
import img12 from "./family_deluxe.jpeg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "double basic",
      slug: "double-basic",
      type: "double",
      price: 1500,
      size: 20,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Relax in our cozy yet spacious Double Deluxe Room, featuring a king-size bed perfect for a restful night's sleep. This room comes with an attached bathroom for your convenience. Step outside to enjoy a beautiful garden, or let the little ones have fun in the nearby playground. For extra enjoyment, a refreshing pool is just steps away, offering a perfect way to unwind and make lasting memories.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "double standard",
      slug: "double-standard",
      type: "double",
      price: 1500,
      size: 20,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Unwind in our Double Basic Room, featuring a comfortable king-size bed for a peaceful night's sleep. Though non-AC, the room is equipped with a cooler to ensure a cool and relaxing atmosphere. Enjoy the convenience of an attached bathroom and step outside to a lush garden. For families, there's a dedicated playground area for children, and a refreshing pool nearby, perfect for both relaxation and fun.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "double deluxe",
      slug: "double-deluxe",
      type: "double",
      price: 1800,
      size: 20,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Experience comfort and luxury in our Double Classic AC Room, featuring a spacious king-size bed designed for your ultimate relaxation. The room comes with an attached bathroom and a cool, refreshing atmosphere thanks to the air conditioning. Step outside to enjoy a serene garden, perfect for unwinding. The playground area provides endless fun for children, while the nearby pool offers a great way to relax and enjoy the surroundings.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },

  {
    sys: {
      id: "4"
    },
    fields: {
      name: "family standard",
      slug: "family-standard",
      type: "family",
      price: 3000,
      size: 30,
      capacity: 4,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Perfect for families, our Family Room features comfortable single-sized beds, ensuring a cozy stay. The room includes an attached bathroom for added convenience, and a beautiful garden right outside to enjoy. The nearby playground provides endless fun for children, while the refreshing pool is ideal for relaxation and enjoyment for the entire family.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img11
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "family deluxe",
      slug: "family-deluxe",
      type: "family",
      price: 3000,
      size: 35,
      capacity: 6,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Perfect for families, our Family Room features cozy single-sized beds and a cooler to keep the space comfortable. Enjoy the convenience of an attached bathroom and take in the beauty of the garden just outside. The kids will love the nearby playground, while the whole family can relax and have fun at the pool, making this room an ideal choice for both relaxation and entertainment." ,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img12
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "Tranquil Haven Villa",
      slug: "presidential-room",
      type: "presidential",
      price: 7800,
      size: 60,
      capacity: 8,
      pets: true,
      breakfast: true,
      featured: true,
      description:
      "Experience the perfect blend of comfort and luxury at our charming farmhouse, featuring three spacious bedrooms, each with an attached private pool for ultimate relaxation. The rooms also come with luxurious bath tubs, offering the perfect spot to unwind. The kitchen is fully equipped, allowing you to prepare your favorite meals with ease. Step outside to enjoy a delightful poolside dining area, perfect for al fresco meals surrounded by nature. For endless fun, we offer both indoor and outdoor games, including a carrom board, chess, and pool. Plus, there's a dedicated playground where children can have hours of entertainment and adventure.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: room1
            }
          }
        },
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  }
];

