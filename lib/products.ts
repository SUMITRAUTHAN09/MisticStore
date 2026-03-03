export type Product = {
  id: string
  name: string
  type: "cone" | "stick"
  flavour: "Kesar Chandan" | "Guggle" | "Black Bela"
  size: "150g" | "60g"
  price: string
  mrp: string
  description: string
  images: string[]
  tag?: string
  tagColor?: string
  burnTime?: string
}

export const products: Product[] = [
  // ── DHOOP CONE 150g ──
  {
    id: "cone-kesar-chandan-150",
    name: "Dhoop Cone — Kesar Chandan",
    type: "cone",
    flavour: "Kesar Chandan",
    size: "150g",
    price: "₹80",
    mrp: "₹80",
    description: "Sacred saffron-sandalwood blend. The aroma of temples, crafted into every cone. Pure, natural, long-burning.",
    images: ["/dhoop-cones-bowl.png", "/dhoop-light.png"],
    tag: "Bestseller",
    tagColor: "bg-yellow-500 text-black",
    burnTime: "45–60 min",
  },
  {
    id: "cone-guggle-150",
    name: "Dhoop Cone — Guggle",
    type: "cone",
    flavour: "Guggle",
    size: "150g",
    price: "₹80",
    mrp: "₹80",
    description: "Traditional Guggle resin — deep, earthy, grounding. Used in rituals for centuries. 100% natural ingredients.",
    images: ["/dhoop-cones-bowl.png", "/dhoop-light.png"],
    tag: "Traditional",
    tagColor: "bg-orange-500 text-black",
    burnTime: "45–60 min",
  },
  {
    id: "cone-black-bela-150",
    name: "Dhoop Cone — Black Bela",
    type: "cone",
    flavour: "Black Bela",
    size: "150g",
    price: "₹80",
    mrp: "₹80",
    description: "Rare Black Bela fragrance — mysterious, floral and deeply sacred. A divine experience with every burn.",
    images: ["/dhoop-cones-bowl.png", "/dhoop-light.png"],
    tag: "Premium",
    tagColor: "bg-zinc-800 text-amber-400",
    burnTime: "45–60 min",
  },

  // ── DHOOP CONE 60g ──
  {
    id: "cone-kesar-chandan-60",
    name: "Dhoop Cone — Kesar Chandan (Small)",
    type: "cone",
    flavour: "Kesar Chandan",
    size: "60g",
    price: "₹40",
    mrp: "₹40",
    description: "Same sacred saffron-sandalwood blend in a compact pack. Perfect for travel or daily puja.",
    images: ["/dhoop-cones-bowl.png", "/dhoop-light.png"],
    tag: "Value Pack",
    tagColor: "bg-yellow-500 text-black",
    burnTime: "45–60 min",
  },
  {
    id: "cone-guggle-60",
    name: "Dhoop Cone — Guggle (Small)",
    type: "cone",
    flavour: "Guggle",
    size: "60g",
    price: "₹40",
    mrp: "₹40",
    description: "Traditional Guggle resin in a compact pack. Try all three flavours without committing to a big box.",
    images: ["/dhoop-cones-bowl.png", "/dhoop-light.png"],
    tag: "Value Pack",
    tagColor: "bg-orange-500 text-black",
    burnTime: "45–60 min",
  },
  {
    id: "cone-black-bela-60",
    name: "Dhoop Cone — Black Bela (Small)",
    type: "cone",
    flavour: "Black Bela",
    size: "60g",
    price: "₹40",
    mrp: "₹40",
    description: "Black Bela in a travel-friendly small pack. Ideal for gifting or trying this rare sacred fragrance.",
    images: ["/dhoop-cones-bowl.png", "/dhoop-light.png"],
    tag: "Value Pack",
    tagColor: "bg-zinc-800 text-amber-400",
    burnTime: "45–60 min",
  },

  // ── DHOOP STICK 150g ──
  {
    id: "stick-kesar-chandan-150",
    name: "Dhoop Stick — Kesar Chandan",
    type: "stick",
    flavour: "Kesar Chandan",
    size: "150g",
    price: "₹80",
    mrp: "₹80",
    description: "Thick, hand-rolled Kesar Chandan dhoop sticks. No bamboo core, no charcoal — just pure sacred fragrance.",
    images: ["/chandan-stick.png", "/chandan1.png", "/chandan2.png"],
    tag: "No Charcoal",
    tagColor: "bg-amber-600 text-black",
    burnTime: "30–45 min",
  },
  {
    id: "stick-guggle-150",
    name: "Dhoop Stick — Guggle",
    type: "stick",
    flavour: "Guggle",
    size: "150g",
    price: "₹80",
    mrp: "₹80",
    description: "Guggle dhoop sticks — thick, coreless, slow-burning. Fills your space with deep ancient resin fragrance.",
    images: ["/chandan-stick.png", "/chandan1.png"],
    tag: "Traditional",
    tagColor: "bg-orange-500 text-black",
    burnTime: "30–45 min",
  },
  {
    id: "stick-black-bela-150",
    name: "Dhoop Stick — Black Bela",
    type: "stick",
    flavour: "Black Bela",
    size: "150g",
    price: "₹80",
    mrp: "₹80",
    description: "Black Bela dhoop sticks — rare floral depth in a long-burning, coreless format. Temple grade quality.",
    images: ["/chandan-stick.png", "/chandan2.png"],
    tag: "Premium",
    tagColor: "bg-zinc-800 text-amber-400",
    burnTime: "30–45 min",
  },

  // ── DHOOP STICK 60g ──
  {
    id: "stick-kesar-chandan-60",
    name: "Dhoop Stick — Kesar Chandan (Small)",
    type: "stick",
    flavour: "Kesar Chandan",
    size: "60g",
    price: "₹40",
    mrp: "₹40",
    description: "Kesar Chandan dhoop sticks in a compact, affordable pack. Great for daily use or gifting.",
    images: ["/chandan-stick.png", "/chandan1.png"],
    tag: "Value Pack",
    tagColor: "bg-yellow-500 text-black",
    burnTime: "30–45 min",
  },
  {
    id: "stick-guggle-60",
    name: "Dhoop Stick — Guggle (Small)",
    type: "stick",
    flavour: "Guggle",
    size: "60g",
    price: "₹40",
    mrp: "₹40",
    description: "Guggle dhoop sticks in a small pack. Try this traditional resin fragrance at an accessible price.",
    images: ["/chandan-stick.png", "/chandan2.png"],
    tag: "Value Pack",
    tagColor: "bg-orange-500 text-black",
    burnTime: "30–45 min",
  },
  {
    id: "stick-black-bela-60",
    name: "Dhoop Stick — Black Bela (Small)",
    type: "stick",
    flavour: "Black Bela",
    size: "60g",
    price: "₹40",
    mrp: "₹40",
    description: "Black Bela dhoop sticks in a compact pack. An affordable way to experience this rare sacred fragrance.",
    images: ["/chandan-stick.png", "/chandan1.png"],
    tag: "Value Pack",
    tagColor: "bg-zinc-800 text-amber-400",
    burnTime: "30–45 min",
  },
]

export const featuredProducts = products.filter((p) => p.size === "150g")