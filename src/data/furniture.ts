export interface FurnitureItem {
  id: string;
  name: string;
  category: "Living Room" | "Bedroom" | "Mandir / Temple" | "Modular Kitchen" | "Wardrobes" | "Doors & Architectural" | "Dining & Balcony";
  shortDescription: string;
  longDescription: string;
  image: string;
  woodType: string;
  finish: string;
  dimensions: string;
  hardware: string;
  craftTime: string;
  warranty: string;
  features: string[];
  customization: string;
  priceTag: string;
  badge?: string;
  isFeatured?: boolean;
}

export const FURNITURE_DATA: FurnitureItem[] = [
  // --- BEDROOM (10 items) ---
  {
    id: "bed-01",
    name: "Royal Heritage Fluted Master Bed",
    category: "Bedroom",
    shortDescription: "Solid teakwood king bed with an expansive backlit fluted acoustic panel headboard and floating nightstands.",
    longDescription: "Engineered from seasoned Grade-A CP Teakwood, the Royal Heritage Master Bed blends timeless craftsmanship with modern hotel-luxury aesthetics. The headboard features hand-milled fluted vertical battens with integrated ambient warm-gold LED channels, soft-close cantilevered nightstands, and heavy-duty German hydraulic under-bed storage.",
    image: "/furniture/bedroom_1.jpeg",
    woodType: "100% Seasoned Grade-A CP Teakwood & Marine Ply Storage Core",
    finish: "Italian Polyurethane Silk Matte with Natural Teak Stain",
    dimensions: "84\" L x 76\" W x 54\" H (Headboard Width: 114\")",
    hardware: "Ebco/Hafele Heavy Duty Gas Springs (150kg capacity) & Blum soft-close sliders",
    craftTime: "18 - 22 Working Days",
    warranty: "15 Years Termite & Structural Guarantee",
    features: [
      "Precision fluted vertical wooden paneling",
      "Seamless touch-sensor integrated LED cove illumination",
      "Ergonomic sloped cushioned backrest option",
      "Reinforced mortise and tenon joint structure"
    ],
    customization: "Customizable in King/Queen/California King sizes, 6 wood stains, and fabric/leatherette upholstery.",
    priceTag: "Bespoke Commission",
    badge: "Masterpiece",
    isFeatured: true
  },
  {
    id: "bed-02",
    name: "Aura Minimalist Teak Platform Bed",
    category: "Bedroom",
    shortDescription: "Contemporary low-profile teak platform bed with organic rounded corners and floating side ledges.",
    longDescription: "Inspired by clean Scandinavian lines and rich Indian teak grains, the Aura Platform Bed offers an airy, grounding feel to modern bedrooms. Constructed with invisible internal joinery and hand-eased organic edges that protect shins while exhibiting natural timber figure.",
    image: "/furniture/bedroom_2.jpeg",
    woodType: "Solid Indian Teak with Natural Grains",
    finish: "Organic Danish Wood Oil & Beeswax Hand Rub",
    dimensions: "82\" L x 74\" W x 38\" H",
    hardware: "Concealed heavy-gauge steel corner braces & anti-creak felt dampening",
    craftTime: "14 - 18 Working Days",
    warranty: "12 Years Structural Guarantee",
    features: [
      "Low-profile floating silhouette with recessed plinth",
      "Rounded safety bevels on all outer frames",
      "Ventilated solid pine mattress support slats",
      "Zero formaldehyde, eco-certified sealant"
    ],
    customization: "Available with or without headboard fabric inserts; custom heights for high or low mattresses.",
    priceTag: "Bespoke Commission"
  },
  {
    id: "bed-03",
    name: "Zenith Japanese Low-Profile Tatami Bed",
    category: "Bedroom",
    shortDescription: "Serene low-slung solid timber platform bed with extended perimeter wings and minimal shadow line.",
    longDescription: "The Zenith bed emphasizes peace, decluttering, and natural earthiness. Hand-joined solid timber perimeter beams form extended ledges that double as resting trays for books or tea. Finished with a breathable matte coat that celebrates the raw feel of natural hardwood.",
    image: "/furniture/bedroom_3.jpeg",
    woodType: "Kiln-Dried Sheesham & Plantation Teak",
    finish: "Ultra-Matte Waterborne Polyurethane (Zero Gloss)",
    dimensions: "88\" L x 80\" W x 32\" H",
    hardware: "Traditional interlocking Japanese-inspired wood joinery",
    craftTime: "16 - 20 Working Days",
    warranty: "15 Years Structural Guarantee",
    features: [
      "Extended 6-inch side perimeter wooden deck",
      "Interlocking knockdown design for easy shifting",
      "Optimal airflow design preventing moisture buildup",
      "Sturdy multi-ply center spine with adjustable support legs"
    ],
    customization: "Available in Natural Walnut, Smoked Teak, or Golden Chestnut tones.",
    priceTag: "Bespoke Commission"
  },
  {
    id: "bed-04",
    name: "Grand Horizon Bedroom Suite",
    category: "Bedroom",
    shortDescription: "Complete integrated bedroom wall unit with wardrobe continuity, ambient lighting, and bespoke bedframe.",
    longDescription: "An all-in-one bedroom architectural woodwork solution designed to maximize space and aesthetic cohesion. Wall-to-wall acoustic panels seamlessly transition into a king-size bedstead, floating bedside cabinets, and matching floor-to-ceiling wardrobes.",
    image: "/furniture/bedroom_4.jpeg",
    woodType: "Boiling Water Proof (BWP) Marine Ply with Natural Teak Veneer & Solid Moldings",
    finish: "Dual-tone Walnut and Warm Sand Matte Lacquer",
    dimensions: "Bespoke to Room Dimensions (Typical 12ft x 10ft Wall Span)",
    hardware: "Hettich Sensys soft-close hinges, Blum Tip-on push latching",
    craftTime: "24 - 28 Working Days",
    warranty: "15 Years Warranty",
    features: [
      "Coordinated bedframe, wardrobe, and headboard paneling",
      "Concealed wire raceways for bedside phone charging and mood lamps",
      "Full-extension soft-closing under-bed storage drawers",
      "Durable edge-banded and hand-beveled profiles"
    ],
    customization: "Custom-configured according to customer's exact room floorplan and window locations.",
    priceTag: "Custom Suite Project"
  },
  {
    id: "bed-05",
    name: "Imperial Velvet & Teak Bedstead",
    category: "Bedroom",
    shortDescription: "Solid teak framed king bed with high-density plush channel tufting and warm brushed brass trims.",
    longDescription: "A statement of refined opulence, combining the tactile warmth of handcrafted solid wood with the softness of stain-resistant velvet fabric. The solid teak frame has hand-sculpted contours, finished with rich walnut undertones.",
    image: "/furniture/bedroom_5.jpeg",
    woodType: "Solid CP Teakwood Frame & Brass Inlay Details",
    finish: "Hand-Rubbed Melamine Silk Sheen",
    dimensions: "86\" L x 78\" W x 50\" H",
    hardware: "Heavy-duty steel corner brackets & hydraulic lifter",
    craftTime: "16 - 20 Working Days",
    warranty: "12 Years Structural Guarantee",
    features: [
      "High-resilience foam padding with breathable luxury upholstery",
      "Solid teak perimeter frame with brushed champagne brass accent strips",
      "Large hydraulic storage box lined with anti-dust linen laminate",
      "Anti-creak vibration dampening core"
    ],
    customization: "Over 40 upholstery fabric options including linen, velvet, and vegan leather.",
    priceTag: "Bespoke Commission"
  },
  {
    id: "bed-06",
    name: "Nordic Slatted Teak Haven Bed",
    category: "Bedroom",
    shortDescription: "Architectural slatted headboard crafted from solid teak battens with recessed nightstands.",
    longDescription: "Designed for modern spaces seeking warmth and texture. Each vertical slatted strip is individually selected for complementary grain matching, rounded at the tips, and secured onto an acoustic felt backing for peaceful, sound-dampened sleep.",
    image: "/furniture/bedroom_6.jpeg",
    woodType: "Seasoned Burma Teak & European Beech Slats",
    finish: "Natural Teak Oil & Polyurethane Satin",
    dimensions: "84\" L x 76\" W x 46\" H",
    hardware: "Blum under-mount drawer slides with soft close",
    craftTime: "15 - 19 Working Days",
    warranty: "15 Years Guarantee",
    features: [
      "Acoustic slatted design reduces room echo",
      "Two integrated floating nightstands with concealed cable management",
      "Solid wood frame supporting over 450 kg dynamic weight",
      "Modular headboard panels for easy stairwell transit"
    ],
    customization: "Available in light natural oak stain, honey teak, or deep dark walnut.",
    priceTag: "Bespoke Commission"
  },
  {
    id: "bed-07",
    name: "Symphony Contemporary Bedroom",
    category: "Bedroom",
    shortDescription: "Modern warm-toned wooden bed with matching wardrobe niche and layered cove headboard.",
    longDescription: "Crafted for urban master bedrooms, the Symphony suite combines warm honey tones with crisp clean joinery. Features integrated reading spot lights, padded lumbar headboard panel, and spacious under-bed compartments.",
    image: "/furniture/bedroom_7.jpeg",
    woodType: "BWP Grade Marine Plywood with 3.5mm Teak Veneer",
    finish: "Scratch-Resistant Polyurethane Matte",
    dimensions: "80\" L x 72\" W x 44\" H",
    hardware: "Ebco Hydraulic bed frame kit & telescopic ball-bearing sliders",
    craftTime: "15 - 18 Working Days",
    warranty: "10 Years Guarantee",
    features: [
      "Dual reading lamps recessed seamlessly into wooden panel",
      "Smooth hydraulic lift accessible from bed foot",
      "Scratch and spill-resistant Italian surface coating",
      "Custom nightstands with velvet-lined jewelry drawers"
    ],
    customization: "Configurable drawer vs hydraulic lift options; headboard height adjustable.",
    priceTag: "Bespoke Commission"
  },
  {
    id: "bed-08",
    name: "Verona Fluted Veneer King Bed",
    category: "Bedroom",
    shortDescription: "Sculpted fluted headboard with dark walnut staining, ambient side perimeter glow, and plush upholstery.",
    longDescription: "The Verona bed showcases intricate CNC-fluted solid timber columns flanking a luxurious cushioned center. Every corner is rounded with master-level precision, celebrating both organic wood patterns and sleek contemporary interior design.",
    image: "/furniture/bedroom_8.jpeg",
    woodType: "Solid Sheesham & Natural Walnut Veneer",
    finish: "Hand-Applied Charcoal Walnut Stain & Satin Sealant",
    dimensions: "85\" L x 78\" W x 52\" H",
    hardware: "German engineered hydraulic lifts & Hafele corner couplings",
    craftTime: "18 - 22 Working Days",
    warranty: "15 Years Guarantee",
    features: [
      "CNC precision-fluted wooden pillared accents",
      "Integrated warm 3000K LED mood channels",
      "Heavy load-bearing internal framework",
      "Anti-termite and borer pressure treated"
    ],
    customization: "Headboard width can be extended across full wall span to accommodate bedside decor.",
    priceTag: "Bespoke Commission",
    badge: "Trending",
    isFeatured: true
  },
  {
    id: "bed-09",
    name: "Classic Timbercraft King Bed",
    category: "Bedroom",
    shortDescription: "Solid Indian teak bed with rich natural figure, sturdy thick corner legs, and traditional mortise joinery.",
    longDescription: "Built to last across generations, the Classic Timbercraft bed celebrates solid Indian hardwood in its purest form. Substantial 4-inch square solid timber posts provide rock-solid rigidity, while the hand-finished grain brings natural warmth to any home.",
    image: "/furniture/bedroom_9.jpeg",
    woodType: "100% Solid Indian Hardwood (Teak / Sheesham)",
    finish: "Traditional Wax Buffed Natural Teak Finish",
    dimensions: "82\" L x 74\" W x 42\" H",
    hardware: "Traditional pegged mortise & tenon joints reinforced with stainless steel fasteners",
    craftTime: "14 - 17 Working Days",
    warranty: "20 Years Structural Warranty",
    features: [
      "Substantial 4x4 inch solid timber corner legs",
      "Heavy-duty solid hardwood center support beam with 3 leg posts",
      "Zero creaking sound technology with rubberized slat gaskets",
      "Naturally resistant to humidity variations"
    ],
    customization: "Available in natural raw oil, honey amber, or deep antique mahogany.",
    priceTag: "Bespoke Commission"
  },
  {
    id: "bed-10",
    name: "Milano Floating Base Bedstead",
    category: "Bedroom",
    shortDescription: "Floating illusion bed with recessed base, under-glow lighting, and seamless wing headboard.",
    longDescription: "Creating the illusion of defying gravity, the Milano features a deeply recessed central pedestal that conceals all ground supports. Soft under-bed LED illumination casts a gentle glow across the floor, making rooms appear larger and effortlessly contemporary.",
    image: "/furniture/bedroom_10.jpeg",
    woodType: "BWP Grade Marine Plywood with Steam Beech & Teak Veneer",
    finish: "Polyurethane Silk Satin Lacquer",
    dimensions: "84\" L x 76\" W x 40\" H",
    hardware: "Heavy-gauge central steel cantilever subframe & Hafele connector cams",
    craftTime: "16 - 20 Working Days",
    warranty: "12 Years Structural Guarantee",
    features: [
      "Innovative floating illusion with 400kg cantilever strength",
      "Automatic floor-level motion sensor night lighting",
      "Clean seamless headboard paneling",
      "Rounded corners throughout the mattress perimeter"
    ],
    customization: "Optional headboard USB-C fast charging hubs and touch dimmers.",
    priceTag: "Bespoke Commission"
  },

  // --- WARDROBES & CUPBOARDS (4 items) ---
  {
    id: "cupboard-01",
    name: "Elysian Tinted Glass & Teak Wardrobe",
    category: "Wardrobes",
    shortDescription: "Floor-to-ceiling 6-door luxury wardrobe with fluted aluminum frames, tinted bronze glass, and backlit wooden shelves.",
    longDescription: "A boutique-inspired master closet experience. Combines warm natural teakwood internals with dark-bronze anodized aluminum profiles and shatterproof bronze tinted glass doors. Each interior cubicle is equipped with automatic sensor LED illumination and velvet-lined jewelry drawers.",
    image: "/furniture/cupboard_1.jpeg",
    woodType: "Marine Ply Core with Natural Teak Veneer & Anodized Aluminum Glass Doors",
    finish: "Walnut Silk Finish & Champagne Bronze Metal Trims",
    dimensions: "120\" W x 24\" D x 108\" H (Floor to Ceiling Customizable)",
    hardware: "Blum Clip-Top 110° Soft-Close Hinges with Integrated Dampers",
    craftTime: "20 - 25 Working Days",
    warranty: "15 Years Hardware & Structural Warranty",
    features: [
      "Automatic sensor-activated interior LED strip illumination",
      "Dedicated velvet-lined watches, belts, and jewelry organizer pull-outs",
      "Floor-to-ceiling seamless loft storage",
      "Anti-dust sealing gaskets on all door frames"
    ],
    customization: "Configurable interior layout (hanging rods, pull-out trouser racks, shoe shelves, safe niche).",
    priceTag: "Custom Wardrobe Project",
    badge: "Bestseller",
    isFeatured: true
  },
  {
    id: "cupboard-02",
    name: "Reflections Sliding Mirrored Wardrobe",
    category: "Wardrobes",
    shortDescription: "Full-height sliding door wardrobe with integrated beveled mirrors and fluted wooden side pilasters.",
    longDescription: "Engineered for spaces where swinging doors would obstruct circulation. The sliding mechanism uses whisper-quiet Italian top-hung rollers that glide effortlessly with the touch of a finger. The full-length mirror expands the room's sense of light and space.",
    image: "/furniture/cupboard_2.jpeg",
    woodType: "Heavy-Duty IS:710 Marine Plywood with Teak Wood Moldings",
    finish: "Polyurethane Matte Finish with Natural Wood Inlays",
    dimensions: "96\" W x 26\" D x 96\" H",
    hardware: "Cinetto / Hafele Top-Hung Whisper Soft-Closing Sliding System (80kg/door)",
    craftTime: "18 - 22 Working Days",
    warranty: "12 Years Warranty",
    features: [
      "Top-hung sliding system leaves floor track flush and easy to sweep",
      "Dual soft-close dampers on both opening and closing strokes",
      "Full-length copper-free distortion-free safety backed mirror",
      "Concealed digital locker compartment"
    ],
    customization: "Available in 2, 3, or 4-door configurations; frosted, fluted, or clear tinted glass options.",
    priceTag: "Custom Wardrobe Project"
  },
  {
    id: "cupboard-03",
    name: "Sovereign Walk-In Wardrobe System",
    category: "Wardrobes",
    shortDescription: "Open-concept luxury walk-in wardrobe with warm wood cubbies, island vanity, and glass-top accessory drawers.",
    longDescription: "The pinnacle of dressing room luxury. Tailored to fit private walk-in suites, featuring open modular hanging modules, pull-out shoe galleries, concealed bag cubbies, and a central freestanding vanity island with glass vitrine top.",
    image: "/furniture/cupboard_3.jpeg",
    woodType: "Seasoned Teak Core with Natural Oak Veneers",
    finish: "Anti-Scratch Polyurethane Velvet Touch",
    dimensions: "Custom Scaled to Client Dressing Suite",
    hardware: "Blum Tandembox Full-Extension Soft-Close Runners",
    craftTime: "25 - 30 Working Days",
    warranty: "15 Years Warranty",
    features: [
      "Glass-topped central island for watch collections and cufflinks",
      "Warm recessed LED light channels behind every vertical upright",
      "Angled wooden shoe shelving with brass retention bars",
      "Integrated garment steamer and full-height dressing mirror"
    ],
    customization: "100% custom-built to room architectural blueprints.",
    priceTag: "Custom Suite Project"
  },
  {
    id: "cupboard-04",
    name: "DuoTone Minimalist Modular Wardrobe",
    category: "Wardrobes",
    shortDescription: "Sleek dual-tone wooden cupboard with continuous J-pull integrated handles and overhead loft storage.",
    longDescription: "A timeless modern classic combining natural timber grain doors with warm matte charcoal accents. Built using handle-less J-profile solid teak edge-pulls for a clean, uninterrupted horizontal flow that never goes out of style.",
    image: "/furniture/cupboard_4.jpeg",
    woodType: "BWP High-Density Plywood with Solid Teak J-Pull Battens",
    finish: "Dual-tone Matte PU Finish with Natural Wood Accent",
    dimensions: "84\" W x 24\" D x 102\" H",
    hardware: "Hettich Sensys 110° Soft-Close Hinges & Heavy-Duty Shelf Pins",
    craftTime: "15 - 19 Working Days",
    warranty: "10 Years Warranty",
    features: [
      "Integrated solid wood J-profile handle grips (no metal handles protruding)",
      "Deep upper lofts for seasonal blankets and luggage storage",
      "Adjustable shelf brackets for changing wardrobe needs",
      "Anti-termite treated 18mm solid core construction"
    ],
    customization: "Choice of laminate colors and natural veneer facings.",
    priceTag: "Custom Wardrobe Project"
  },

  // --- LIVING & HALL (12 items) ---
  {
    id: "hall-01",
    name: "Grand Horizon Backlit Entertainment Unit",
    category: "Living Room",
    shortDescription: "Wall-spanning media console with vertical fluted paneling, backlit display niches, and floating storage.",
    longDescription: "Elevate your living room into an architectural showpiece. Crafted with bookmatched teak veneer back panels, CNC-milled fluted uprights, and warm ambient backlighting that creates an inviting cinematic atmosphere. Floating bottom console conceals set-top boxes, gaming consoles, and messy cables.",
    image: "/furniture/hall_1.jpg",
    woodType: "Marine Plywood with Natural Burmese Teak Veneer & Solid Teak Moldings",
    finish: "Hand-Applied Teak Walnut Polish & Satin Matte Polyurethane",
    dimensions: "144\" W x 18\" D x 96\" H (Tailored to TV wall span)",
    hardware: "Blum Tip-On Push-to-Open mechanisms & Heavy-Duty Wall Anchors",
    craftTime: "20 - 24 Working Days",
    warranty: "15 Years Structural Guarantee",
    features: [
      "Concealed cable raceway system behind wall panels",
      "Recessed acrylic diffusers for 3000K warm LED light",
      "Floating storage console with acoustic fabric speaker panel",
      "Tempered glass display shelves for art curios"
    ],
    customization: "Custom designed to house TVs from 55\" up to 98\" with custom acoustic treatment.",
    priceTag: "Bespoke Commission",
    badge: "Signature",
    isFeatured: true
  },
  {
    id: "hall-02",
    name: "Artisan Low-Profile Living Lounge Set",
    category: "Living Room",
    shortDescription: "Hand-finished teakwood lounge seating with wide armrests and matching slab coffee table.",
    longDescription: "A fusion of mid-century aesthetics and traditional Indian timber joinery. Features deep seating with high-density foam, upholstered in breathable woven linen, supported by an exposed solid teakwood chassis that showcases interlocking finger joints.",
    image: "/furniture/hall_2.avif",
    woodType: "100% Solid Indian Teakwood Chassis",
    finish: "Natural Danish Oil Hand Buff",
    dimensions: "Sofa: 90\" W x 36\" D x 30\" H | Table: 48\" L x 28\" W x 16\" H",
    hardware: "Hand-cut exposed finger and lap joints, stainless steel internal reinforcements",
    craftTime: "18 - 22 Working Days",
    warranty: "15 Years Structural Guarantee",
    features: [
      "Solid 2-inch thick teak armrests serve as beverage ledges",
      "High-density 40D foam with feather-touch wrap",
      "Removable dry-cleanable luxury fabric covers",
      "Matching solid wood slab coffee table with chamfered edge"
    ],
    customization: "Available as 3-seater, 2-seater, single armchair, and customized L-sectional.",
    priceTag: "Bespoke Commission"
  },
  {
    id: "hall-03",
    name: "Parametric Geometric Wood Partition",
    category: "Living Room",
    shortDescription: "Architectural room divider with geometric jali lattice in solid teak, creating gentle privacy and light patterns.",
    longDescription: "Separate living and dining areas without blocking light or airflow. Each lattice element is carved with precision CNC routers and hand-sanded by master carpenters to ensure velvety smooth surfaces on every interior cutout.",
    image: "/furniture/hall_3.jpeg",
    woodType: "Solid Teakwood Framework & High-Density Timber Composite Core",
    finish: "Matte Polyurethane Clear Coat",
    dimensions: "48\" W x 4\" D x 108\" H (Modular repeatable sections)",
    hardware: "Concealed ceiling and floor expansion turnbuckles",
    craftTime: "14 - 18 Working Days",
    warranty: "12 Years Guarantee",
    features: [
      "Custom geometric Islamic or Vedic parametric lattice patterns",
      "Zero-damage ceiling compression mounts",
      "Integrated planter boxes or showcase niches optional",
      "Maintains natural daylight while delineating living zones"
    ],
    customization: "Available in custom dimensions and pattern densities.",
    priceTag: "Bespoke Commission"
  },
  {
    id: "hall-04",
    name: "Bookmatched Veneer Hall Feature Wall",
    category: "Living Room",
    shortDescription: "Symmetrical natural wood grain wall paneling with integrated floating credenza and brass accents.",
    longDescription: "Showcases the rare beauty of mirror-matched natural wood veneers. Two consecutive flitches of wood grain are unfolded like pages of a book to create a hypnotic, symmetrical natural artwork that serves as the centerpiece of the home.",
    image: "/furniture/hall_4.jpeg",
    woodType: "Rare Natural Rosewood & Teak Bookmatched Veneer on BWP Marine Core",
    finish: "Multi-Coat Italian Polyester Mirror Gloss or Satin Matte",
    dimensions: "120\" W x 16\" D x 96\" H",
    hardware: "Hafele push-release drawer slides",
    craftTime: "22 - 26 Working Days",
    warranty: "15 Years Guarantee",
    features: [
      "Hand-selected bookmatched natural timber veneer grains",
      "Brushed brass divider strips between panel modules",
      "Concealed ambient back-wall LED illumination",
      "Seamless push-to-open drawer fronts"
    ],
    customization: "Available in Teak, American Walnut, Smoked Eucalyptus, or Ebony grains.",
    priceTag: "Bespoke Commission"
  },
  {
    id: "hall-05",
    name: "Metropolitan Fluted Bar & Console Credenza",
    category: "Living Room",
    shortDescription: "Multi-functional living room sideboard with fluted wood tambour doors, wine rack, and marble top.",
    longDescription: "A sophisticated dining-living credenza designed for entertaining. Features sliding tambour slats that wrap around curved pill-shaped ends, revealing a stemware rack, bottle storage, and felt-lined cutlery drawers.",
    image: "/furniture/hall_5.jpeg",
    woodType: "Solid Teak Tambour Slats & Marine Grade Plywood",
    finish: "Smoked Honey Teak Satin Lacquer",
    dimensions: "72\" L x 20\" D x 34\" H",
    hardware: "Flexible curved tambour track mechanism & soft-close slides",
    craftTime: "16 - 20 Working Days",
    warranty: "12 Years Guarantee",
    features: [
      "Seamless wrap-around curved tambour wooden doors",
      "Optional Italian Statuario marble or quartz top slab",
      "Integrated hanging wine glass racks & 12-bottle cellar slots",
      "Concealed cable port for coffee machines or soundbars"
    ],
    customization: "Available in 60\", 72\", and 84\" lengths with custom interior shelving.",
    priceTag: "Bespoke Commission",
    badge: "Popular",
    isFeatured: true
  },
  {
    id: "hall-06",
    name: "Sultan Luxury L-Shaped Teak Sectional",
    category: "Living Room",
    shortDescription: "Expansive corner sofa with solid teakwood exposed perimeter and integrated corner table.",
    longDescription: "Commanding presence meets supreme lounging comfort. The Sultan sectional wraps around living halls with deep cushions, wide wooden arm perches, and an integrated corner wooden lamp table with USB connectivity.",
    image: "/furniture/hall_6.jpeg",
    woodType: "Seasoned Grade-A CP Teakwood Frame",
    finish: "Hand-Rubbed Melamine Silk Matte",
    dimensions: "120\" L x 96\" Return x 36\" D x 32\" H",
    hardware: "Heavy-duty steel corner joining brackets & high-tension elastic webbing",
    craftTime: "20 - 24 Working Days",
    warranty: "15 Years Frame Warranty",
    features: [
      "Deep 30-inch plush seating with multi-density orthopaedic support",
      "Built-in corner solid timber end table with integrated storage cavity",
      "Solid teak perimeter base elevated 5 inches for robotic vacuum access",
      "Stain-resistant fabric upholstery with Scotchgard treatment"
    ],
    customization: "Left or right-hand configuration; customizable modular dimensions.",
    priceTag: "Bespoke Commission"
  },
  {
    id: "hall-07",
    name: "Heritage Foyer Console & Shoe Gallery",
    category: "Living Room",
    shortDescription: "Artistic entryway console with carved fluted drawers, shoe ventilation louver doors, and brass pulls.",
    longDescription: "Makes an unforgettable first impression at your main entryway. Features louvered wooden doors that ensure natural ventilation for footwear, topped with a rich solid wood console table for keys, flowers, and art sculptures.",
    image: "/furniture/hall_7.jpeg",
    woodType: "Solid Teakwood & Marine Plywood",
    finish: "Antique Honey Teak Polish",
    dimensions: "54\" L x 16\" D x 36\" H",
    hardware: "Solid cast brass hardware & soft-close concealed hinges",
    craftTime: "14 - 17 Working Days",
    warranty: "10 Years Guarantee",
    features: [
      "Aesthetic louvered door slats allow natural air circulation",
      "Top drawer with divided compartments for mail, keys, and sanitizers",
      "Accommodates up to 18 pairs of shoes in a compact footprint",
      "Beveled edge solid wood top surface"
    ],
    customization: "Configurable with padded seating bench extension for putting on shoes.",
    priceTag: "Bespoke Commission"
  },
  {
    id: "hall-08",
    name: "Artisan Open Wall Library & Display",
    category: "Living Room",
    shortDescription: "Floor-to-ceiling modular open bookcase with asymmetric wooden compartments and display spotlights.",
    longDescription: "A showpiece library unit tailored for collectors and book lovers. The rhythmic interplay of varied shelf heights creates dynamic visual movement, while solid wood vertical dividers provide uncompromising rigidity.",
    image: "/furniture/hall_8.jpeg",
    woodType: "Solid Teak Uprights with Marine Core Veneer Shelves",
    finish: "Natural Matte PU Lacquer",
    dimensions: "96\" W x 14\" D x 102\" H",
    hardware: "Concealed heavy-load wall anchors & Hafele eccentric cams",
    craftTime: "18 - 22 Working Days",
    warranty: "15 Years Guarantee",
    features: [
      "Load capacity of 40kg per shelf without sagging",
      "Varied asymmetric cubbies for oversized art books and sculptures",
      "Recessed LED micro-pucks for spotlighting prized artifacts",
      "Base cabinets with solid timber doors for closed storage"
    ],
    customization: "Customized to exact ceiling heights and wall lengths.",
    priceTag: "Bespoke Commission"
  },
  {
    id: "hall-09",
    name: "Acoustic Slatted Feature Wall & Media Hub",
    category: "Living Room",
    shortDescription: "Full-wall vertical wood batten acoustic panelling with integrated floating TV shelf and soundbar ledge.",
    longDescription: "Combines cutting-edge interior acoustics with warm Scandinavian timber styling. Precision-spaced natural wood slats absorb unwanted sound flutter and echoes in open living spaces while anchoring the TV entertainment zone.",
    image: "/furniture/hall_9.jpeg",
    woodType: "Natural White Oak / Teak Slats on Acoustic Sound-Absorption Backing",
    finish: "Ultra-Matte Non-Reflective Wood Sealant",
    dimensions: "120\" W x 4\" D x 96\" H",
    hardware: "Concealed z-clip wall mounting system",
    craftTime: "16 - 20 Working Days",
    warranty: "12 Years Guarantee",
    features: [
      "NRC 0.85 acoustic sound-dampening performance",
      "Integrated cable ducts behind timber slats for hidden electronics",
      "Floating 72\" audio-visual console with bevel-edge drawers",
      "Warm accent ambient side channel lighting"
    ],
    customization: "Available in Oak, Walnut, Teak, and Ebony stains.",
    priceTag: "Bespoke Commission"
  },
  {
    id: "hall-10",
    name: "Imperial Living Suite & Center Table",
    category: "Living Room",
    shortDescription: "Solid teak classical seating ensemble with hand-carved motifs, plush cushioning, and nested center table.",
    longDescription: "A grand classical living room centerpiece. Handcrafted by our senior carvers with delicate floral relief carvings along the apron and cabriole legs, paired with a matching solid wood coffee table with tempered glass top.",
    image: "/furniture/hall_10.jpeg",
    woodType: "100% Solid Indian Hardwood (Grade-A Teakwood)",
    finish: "Hand-Applied Antique Rosewood Polish with Gold Patina",
    dimensions: "Sofa: 86\" W x 34\" D x 38\" H | Center Table: 42\" x 42\" x 18\"",
    hardware: "Traditional pegged joints with high-grade brass hardware",
    craftTime: "24 - 28 Working Days",
    warranty: "20 Years Structural Guarantee",
    features: [
      "Intricate hand-carved floral crown and apron details",
      "Heavy-duty solid wood cabriole legs with excellent stability",
      "Nested secondary service tables that slide underneath",
      "High-density molded cushions with jacquard upholstery"
    ],
    customization: "Choice of gold leafing, silver highlights, or pure natural wood finish.",
    priceTag: "Bespoke Commission"
  },
  {
    id: "hall-11",
    name: "Architectural Screen & Open Niche Divider",
    category: "Living Room",
    shortDescription: "Sculptural wooden partition with staggered display alcoves for indoor plants and curated artifacts.",
    longDescription: "A multi-dimensional divider that provides privacy between entryway and living room while remaining transparent and breezy. Features staggered solid wood cubbies lined with warm down-lights, perfect for bonsai plants and ceramic art.",
    image: "/furniture/hall_11.jpeg",
    woodType: "Solid Teak & Steam Beech Core",
    finish: "Natural Silk Polyurethane Polish",
    dimensions: "60\" W x 16\" D x 108\" H",
    hardware: "Floor-to-ceiling seismic-grade structural anchors",
    craftTime: "16 - 20 Working Days",
    warranty: "15 Years Guarantee",
    features: [
      "Dual-sided accessibility for displaying items from both rooms",
      "Built-in planter cavities lined with waterproof stainless steel trays",
      "Warm mini-LED spotlights integrated into top shelves",
      "Heavy weighted base ensures stable, sway-free installation"
    ],
    customization: "Width and shelf configuration can be tailored to any hallway span.",
    priceTag: "Bespoke Commission"
  },
  {
    id: "hall-12",
    name: "Zenith Solid Teak Frame Armchair Suite",
    category: "Living Room",
    shortDescription: "Ergonomic modern lounge chairs with exposed solid wood spindle back and plush down-blend cushions.",
    longDescription: "The Zenith armchair suite is a masterclass in wood turning and ergonomic comfort. Every spindle along the gently curved back is turned from single billets of seasoned teak, cradling the spine at an optimal relaxing recline angle.",
    image: "/furniture/hall_12.jpeg",
    woodType: "Solid CP Teakwood Billet Stock",
    finish: "Matte Organic Danish Oil Hand Buff",
    dimensions: "34\" W x 36\" D x 34\" H (Each Chair)",
    hardware: "Concealed mortise joints & reinforced stainless cross-ties",
    craftTime: "15 - 18 Working Days",
    warranty: "15 Years Guarantee",
    features: [
      "Hand-turned solid teak spindles along curved back",
      "Down-blend and high-resilience foam combination cushions",
      "Sculpted paddle armrests with organic tactile feel",
      "Matching ottoman available for full lounge relaxation"
    ],
    customization: "Available as single lounge chairs, pairs, or with matching 3-seater sofa.",
    priceTag: "Bespoke Commission",
    badge: "Craft Award"
  },

  // --- MANDIR / POOJA TEMPLE (3 items) ---
  {
    id: "mandir-01",
    name: "Vedic Grand Teakwood Carved Mandir",
    category: "Mandir / Temple",
    shortDescription: "Traditional hand-carved solid teak temple with Shikhar dome, sacred elephant pillars, and brass bells.",
    longDescription: "Designed strictly according to ancient Vastu Shastra proportions, this grand solid teak mandir is a consecrated sanctuary for the home. Hand-carved by multi-generational temple artisans with intricate peacocks, gopuram shikhara, brass hanging bells, and pull-out bhog/prasad wooden tray.",
    image: "/furniture/mandir_1.jpeg",
    woodType: "100% Solid Seasoned Teakwood (Grade-A Nilambur Teak)",
    finish: "Pure Natural Teak Matte Polish with 24K Gold Leaf Accents",
    dimensions: "48\" W x 24\" D x 72\" H (Customizable to altar space)",
    hardware: "Solid Brass hanging bells, brass drawer pulls, and heavy soft-close sliders",
    craftTime: "25 - 30 Working Days",
    warranty: "Lifetime Structural Guarantee against termites & wood degradation",
    features: [
      "Carved Shikhar Gopuram dome following Vastu Shastra guidelines",
      "Heavy pull-out solid wood Bhog tray for daily puja offerings",
      "Spacious base storage drawers for puja samagri, incense, and lamps",
      "Concealed warm LED halo lighting behind the sanctum sanctorum"
    ],
    customization: "Available in custom dimensions, wall-mounted or floor-standing designs, and optional brass jali doors.",
    priceTag: "Sacred Custom Project",
    badge: "Master Artisan",
    isFeatured: true
  },
  {
    id: "mandir-02",
    name: "Suryavanshi Contemporary Wall Mandir",
    category: "Mandir / Temple",
    shortDescription: "Modern wall-hung teak pooja unit with backlit OM motif, laser-cut jali doors, and silent drawer storage.",
    longDescription: "A harmonious marriage of modern minimalist interiors and sacred tradition. Ideal for apartments and modern villas, featuring a glowing sacred OM backdrop with warm backlighting, delicate laser-cut teak jali doors, and a hidden bottom drawer for incense and cotton wicks.",
    image: "/furniture/mandir_2.jpeg",
    woodType: "Solid Teak Frame & Marine Ply Sanctum with Teak Veneer",
    finish: "Golden Honey Teak Polyurethane Satin",
    dimensions: "36\" W x 16\" D x 48\" H (Wall Mountable)",
    hardware: "Blum soft-close concealed door hinges & heavy-duty wall anchor brackets",
    craftTime: "15 - 19 Working Days",
    warranty: "15 Years Guarantee",
    features: [
      "Illuminated laser-cut acrylic and wood OM backdrop",
      "Jali doors allow gentle view of idols while keeping sanctum enclosed",
      "Pull-out brass-plated diya tray with heat-resistant tempered glass surface",
      "Heavy-duty concealed French cleat mounting supporting up to 120 kg"
    ],
    customization: "Choice of backlit motifs (Om, Gayatri Mantra, Swastik, Lotus, or Radha Krishna silhouette).",
    priceTag: "Bespoke Commission",
    badge: "Trending"
  },
  {
    id: "mandir-03",
    name: "Shri Hari Compact Wooden Temple",
    category: "Mandir / Temple",
    shortDescription: "Floor-standing compact teakwood mandir with storage cabinet base and carved peacock pillars.",
    longDescription: "Perfect for apartments with dedicated pooja niches. Features a solid wood carved archway, twin carved pillars, deep bottom storage drawers for daily puja essentials, and a heat-shielded brass diya platform.",
    image: "/furniture/mandir_3.jpeg",
    woodType: "Solid Indian Teakwood & Seasoned Hardwood",
    finish: "Hand-Rubbed Gloss Teak Polish",
    dimensions: "32\" W x 20\" D x 58\" H",
    hardware: "Solid brass handles, magnetic door catches, and smooth ball-bearing slides",
    craftTime: "14 - 18 Working Days",
    warranty: "15 Years Guarantee",
    features: [
      "Compact footprint suited for compact apartments",
      "Carved side jaalis for natural ventilation of lamp smoke",
      "Heat-resistant brass diya insert tray",
      "Bottom twin doors for storing large puja vessels and oil cans"
    ],
    customization: "Available in light honey, golden teak, and dark antique finishes.",
    priceTag: "Bespoke Commission"
  },

  // --- MODULAR KITCHEN & DINING (4 items) ---
  {
    id: "kitchen-01",
    name: "MasterChef Ergonomic Modular Kitchen",
    category: "Modular Kitchen",
    shortDescription: "State-of-the-art wooden kitchen with waterproof marine ply core, quartz worktop, and soft-close pullouts.",
    longDescription: "Engineered to withstand rigorous daily Indian cooking with high heat and moisture. Built entirely from IS:710 Boiling Water Proof (BWP) Marine Ply with termite treatment, equipped with world-class German tandem drawer systems, spice pull-outs, and oil pull-out organizers.",
    image: "/furniture/kichen_1.jpeg",
    woodType: "IS:710 Boiling Water Proof (BWP) Marine Plywood & Acrylic/Veneer Shutters",
    finish: "Anti-Scratch Polyurethane High-Gloss & Textured Woodgrain Finish",
    dimensions: "Custom Tailored to Kitchen Floorplan (L-Shape / Parallel / U-Shape)",
    hardware: "Blum Legrabox Tandem Drawers & Hafele Soft-Close Pantry Systems",
    craftTime: "24 - 30 Working Days",
    warranty: "25 Years Termite, Borer & Water Swelling Warranty",
    features: [
      "100% boiling water proof marine ply construction",
      "Heavy load-bearing soft-close tandem drawers (up to 70kg per drawer)",
      "Integrated cutlery organizers, corner carousel, and tall pantry pull-out",
      "Under-cabinet sensor task lighting over countertops"
    ],
    customization: "Over 60 shutter finishes (Anti-fingerprint matte, acrylic, PU lacquer, natural wood veneer).",
    priceTag: "Turnkey Kitchen Project",
    badge: "Turnkey Luxury",
    isFeatured: true
  },
  {
    id: "kitchen-02",
    name: "Chef’s Island Parallel Kitchen Suite",
    category: "Modular Kitchen",
    shortDescription: "Modern parallel kitchen with freestanding prep island, overhead glass display cabinets, and integrated chimney niche.",
    longDescription: "Designed for open-plan luxury apartments and villas. Features a substantial central island with breakfast counter bar stools, dual-tone wooden base cabinets, and frosted glass upper cabinets with warm interior illumination.",
    image: "/furniture/kitchen_2.jpeg",
    woodType: "Heavy-Duty Marine Ply with Natural Teak Veneer & Anti-Fingerprint Matte Laminates",
    finish: "Matte Velvet Touch Scratch-Resistant Finish",
    dimensions: "Custom Scaled to Room Floorplan",
    hardware: "Hettich InnoTech Atira drawer channels with silent soft damping",
    craftTime: "25 - 32 Working Days",
    warranty: "25 Years Warranty",
    features: [
      "Multi-functional central preparation island with power outlets",
      "Lift-up Aventos overhead cabinet doors for head clearance",
      "Concealed pull-out dustbin and detergent caddy under sink",
      "Seamless integration for built-in ovens, microwaves, and dishwashers"
    ],
    customization: "Full 3D layout simulation and custom hardware configurations.",
    priceTag: "Turnkey Kitchen Project"
  },
  {
    id: "kitchen-03",
    name: "Provencal U-Shaped Modular Wooden Kitchen",
    category: "Modular Kitchen",
    shortDescription: "Spacious U-shaped kitchen with shaker style wooden cabinet profiles, tall appliance unit, and quartz surfaces.",
    longDescription: "Brings the timeless charm of European shaker cabinetry together with heavy-duty Indian kitchen durability. Solid hardwood framed shaker doors enclose ultra-spacious storage modules, a dedicated corner magic carousel, and a full-height pantry.",
    image: "/furniture/kitchen_3.jpeg",
    woodType: "BWP Marine Ply with Solid Steam Beech Shaker Frames",
    finish: "Multi-Coat Polyurethane Silk Matte Paint with Wood Grains",
    dimensions: "Custom Built to U-Shape Footprint",
    hardware: "Grass / Hafele Corner Carousel Pullouts & Blum Soft-Close Hinges",
    craftTime: "26 - 32 Working Days",
    warranty: "25 Years Structural & Water Warranty",
    features: [
      "Classic shaker frame doors with seamless CNC routed bevels",
      "Tall appliance tower housing built-in microwave and convection oven",
      "Blind corner pull-out carousel ensuring 100% corner space utilization",
      "Heavy-duty quartz countertop edge detailing and sink cutouts"
    ],
    customization: "Available in over 15 shades including Sage Green, Navy Blue, Warm Taupe, and Natural Wood.",
    priceTag: "Turnkey Kitchen Project"
  },
  {
    id: "dining-01",
    name: "Emperor 6-Seater Solid Teak Dining Suite",
    category: "Dining & Balcony",
    shortDescription: "Solid teakwood dining table with hand-turned legs and 6 ergonomic cushioned dining chairs.",
    longDescription: "The gathering heart of your home. Constructed from massive 2-inch thick solid teak planks with bookmatched grain flow, supported by heavy hand-turned timber legs. Comes paired with 6 ergonomically curved solid wood dining chairs with plush stain-resistant seating.",
    image: "/furniture/dining_1.jpeg",
    woodType: "100% Solid Seasoned Nilambur Teakwood",
    finish: "Water & Heat-Resistant Italian Polyurethane Silk Matte",
    dimensions: "Table: 72\" L x 40\" W x 30\" H | Chair: 20\" W x 22\" D x 38\" H",
    hardware: "Traditional solid mortise & tenon pegged joints (zero wobbly joints)",
    craftTime: "18 - 24 Working Days",
    warranty: "20 Years Structural Guarantee",
    features: [
      "Heat and water-ring resistant protective topcoat",
      "Solid 2-inch thick hardwood tabletop with eased beveled edge",
      "High-density ergonomic seat cushions with stain-resistant fabric",
      "Accommodates up to 8 diners comfortably with optional bench"
    ],
    customization: "Can be expanded into an 8-seater (96\" L) or 10-seater (120\" L); matching dining bench available.",
    priceTag: "Bespoke Commission",
    badge: "Popular",
    isFeatured: true
  },

  // --- DOORS & ARCHITECTURAL (2 items) ---
  {
    id: "door-01",
    name: "Royal Palace Carved Teak Main Door",
    category: "Doors & Architectural",
    shortDescription: "Magnificent solid teakwood entrance double door with deep 3D floral and mythological relief carving.",
    longDescription: "An entrance door that declares heritage, royalty, and grand architectural presence. Milled from 3.5-inch thick solid teak billets, deeply carved by master sculptors with auspicious traditional motifs, and flanked by a heavy carved teak doorframe with solid brass hardware.",
    image: "/furniture/maindoor_1.jpeg",
    woodType: "100% Grade-A CP Solid Teakwood (3.5 inch thickness)",
    finish: "Natural Teak Weather-Resistant Polyurethane Exterior Polish",
    dimensions: "Door Frame: 48\" - 60\" W x 96\" H (Customizable to entrance opening)",
    hardware: "Solid Antique Brass Pull Handles, 5-Lever Heavy Mortise Lock, and 4-Ball-Bearing Brass Hinges",
    craftTime: "25 - 30 Working Days",
    warranty: "25 Years Guarantee against wood warping and structural defects",
    features: [
      "Deep 3D hand-carved relief panels celebrating Indian woodcraft",
      "Massive 3.5-inch thick solid timber construction for superior security",
      "Exterior-grade UV and rain resistant Italian weather sealant",
      "Includes matching heavy carved teakwood frame (chaukhat)"
    ],
    customization: "Available as single grand pivot door or traditional double swing door.",
    priceTag: "Masterpiece Commission",
    badge: "Royal Heritage",
    isFeatured: true
  },
  {
    id: "design-01",
    name: "Architectural Wood Ceiling & Wall Concept",
    category: "Doors & Architectural",
    shortDescription: "Custom coffered wooden false ceiling and wall cladding with recessed mood lighting.",
    longDescription: "Turn any room into an architectural masterpiece. We create bespoke wooden ceiling rafters, coffered geometric grids, and acoustic wall panels that add dramatic depth, insulation, and luxurious warmth to drawing rooms and penthouses.",
    image: "/furniture/design.jpeg",
    woodType: "Lightweight Marine Core with Natural Teak & Oak Veneer Rafters",
    finish: "Ultra-Matte Non-Reflective Natural Wood Finish",
    dimensions: "Custom Engineered to Room Ceiling Footprint",
    hardware: "Seismic heavy-gauge galvanized steel suspension grid",
    craftTime: "18 - 25 Working Days",
    warranty: "15 Years Guarantee",
    features: [
      "Thermal and acoustic room insulation enhancement",
      "Seamless integration with AC diffusers, chandeliers, and recessed spot lamps",
      "Conceals electrical conduits and structural ceiling beams",
      "Lightweight engineered structure ensuring zero ceiling load strain"
    ],
    customization: "Custom ceiling patterns (linear rafters, geometric coffered, organic parametric waves).",
    priceTag: "Architectural Project"
  },

  // --- BALCONY & OUTDOOR (1 item) ---
  {
    id: "balcony-01",
    name: "Panorama Weatherproof Balcony Lounge",
    category: "Dining & Balcony",
    shortDescription: "Outdoor solid wood daybed with vertical green-wall planter partition and weather-resistant finish.",
    longDescription: "Transform high-rise balconies and patio decks into a serene personal retreat. Built using seasoned teak that naturally contains protective oils, coated with multi-layer exterior marine polyurethane to withstand sunshine and rain, accompanied by outdoor water-repellent cushions.",
    image: "/furniture/balcony_9.jpeg",
    woodType: "Seasoned High-Oil Natural Teakwood (Grade-A)",
    finish: "Marine-Grade Exterior UV & Waterproof Protective Sealant",
    dimensions: "72\" L x 30\" W x 32\" H",
    hardware: "316 Marine-Grade Stainless Steel Screws & Fasteners (Rust-Proof)",
    craftTime: "14 - 18 Working Days",
    warranty: "10 Years Outdoor Weather Warranty",
    features: [
      "Marine-grade stainless steel hardware immune to rust and sea breeze",
      "Water-repellent outdoor canvas fabric cushions with quick-dry foam",
      "Slatted seat design allows instant rainwater drainage",
      "Integrated planter box for hanging climbers and aromatic herbs"
    ],
    customization: "Custom length to fit exact balcony nook dimensions.",
    priceTag: "Bespoke Commission"
  }
];

export const CATEGORIES = [
  "All",
  "Living Room",
  "Bedroom",
  "Mandir / Temple",
  "Modular Kitchen",
  "Wardrobes",
  "Doors & Architectural",
  "Dining & Balcony"
] as const;

// High-Resolution Widescreen items (1500px - 1600px wide) tailored for crystal-clear PC Full-Screen Hero Carousel with zero gaps
const HIGH_RES_WIDESCREEN_IDS = [
  "hall-01",    // 1600x900 (hall_1.jpg) - Grand Horizon Backlit Entertainment Unit
  "bed-01",     // 1600x1215 (bedroom_1.jpeg) - Royal Heritage Fluted Master Bed
  "dining-01",  // 1600x1040 (dining_1.jpeg) - Emperor 6-Seater Solid Teak Dining Suite
  "hall-09",    // 1500x1071 (hall_9.jpeg) - Acoustic Slatted Feature Wall & Media Hub
  "kitchen-02", // 1500x1049 (kitchen_2.jpeg) - Chef’s Island Parallel Kitchen Suite
  "hall-11",    // 1500x1049 (hall_11.jpeg) - Architectural Screen & Open Niche Divider
  "bed-08",     // 1600x1104 (bedroom_8.jpeg) - Verona Fluted Veneer King Bed
  "hall-05",    // 1600x1040 (hall_5.jpeg) - Metropolitan Fluted Bar & Console Credenza
];

export const HERO_CAROUSEL_ITEMS: FurnitureItem[] = HIGH_RES_WIDESCREEN_IDS.map(
  (id) => FURNITURE_DATA.find((item) => item.id === id)!
).filter(Boolean);
