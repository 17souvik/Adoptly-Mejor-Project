const animalData = [
  { id: 1, category: "Dog", breed: "Labrador Retriever", age: 4, place: "Mumbai, India", buyer_name: "John Doe", price: "₹25,000", image: "https://image.petmd.com/files/styles/863x625/public/2024-11/labrador-retriever.jpg", description: "Labradors are friendly, intelligent, and versatile dogs, often used as guide dogs and therapy animals." },
  { id: 2, category: "Dog", breed: "Golden Retriever", age: 3, place: "New Delhi, India", buyer_name: "Jane Smith", price: "₹27,000", image: "https://www.carecredit.com/sites/cc/image/article_golden_retriever.jpg", description: "Golden Retrievers are loyal, gentle dogs known for their friendly nature and excellent service dog skills." },
  { id: 3, category: "Dog", breed: "Beagle", age: 2, place: "Chennai, India", buyer_name: "Sarah Lee", price: "₹22,000", image: "https://www.thesprucepets.com/thmb/76Jd0a4_CBxXNyBah2gbK099xGo=/4367x0/filters:no_upscale():strip_icc()/beagle-RolfKopfle-Photolibrary-Getty-135631212-56a26b1d3df78cf772756667.jpg", description: "Beagles are energetic, curious dogs with great scenting abilities, often used in detection work." },
  {
    id: 4,
    category: "Dog",
    breed: "Bulldog",
    age: 5,
    place: "Bangalore, India",
    buyer_name: "Mark Brown",
    price: "₹30,000",
    image: "https://www.akc.org/wp-content/uploads/2017/11/Bulldog-standing-in-the-grass.jpg",
    description: "Bulldogs are known for their muscular build, short snouts, and gentle but courageous personalities."
  },
  {
    id: 5,
    category: "Dog",
    breed: "Poodle",
    age: 4,
    place: "Hyderabad, India",
    buyer_name: "Emily Davis",
    price: "₹35,000",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSoPP6Niq9hSu9nCBgwmpfW8v3txmHrma78vwfl7R4uRYUiyQ-Fxl4Xwf7m-HtOgptf2_XsOKE8H6Poyg9KEE3YlA",
    description: "Poodles are highly intelligent and hypoallergenic dogs, great companions for families and individuals with allergies."
  },
  { id: 6, category: "Cat", breed: "Persian", age: 3, place: "Kolkata, India", buyer_name: "Alex Johnson", price: "₹20,000", image: "https://icatcare.org/app/uploads/2018/10/persian.jpg", description: "Persian cats are known for their luxurious coats and calm, affectionate personalities." },
  { id: 7, category: "Cat", breed: "Siamese", age: 2, place: "Jaipur, India", buyer_name: "Bella Williams", price: "₹18,000", image: "https://www.catster.com/wp-content/uploads/2023/11/Siamese-Cat_Andreas-LischkaPixabay.jpg", description: "Siamese cats are famous for their striking blue eyes, short coats, and vocal, affectionate nature." },
  { id: 8, category: "Cat", breed: "Maine Coon", age: 5, place: "Pune, India", buyer_name: "Charlie Taylor", price: "₹22,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3AdiAdrFuRHWVRDF1e__7lBXqppg9kNkyw&s", description: "Maine Coons are one of the largest domesticated cat breeds, known for their friendly and playful personalities." },
  { id: 9, category: "Cat", breed: "Bengal", age: 1, place: "Ahmedabad, India", buyer_name: "Diana Moore", price: "₹25,000", image: "https://media.istockphoto.com/id/867775498/photo/bengal-cat-outdoor.jpg?s=612x612&w=0&k=20&c=e-UZU-70zQC-lSUsVjvaeLNZCoHW7whCxLPaKHImPKE=", description: "Bengal cats have a wild appearance with leopard-like spots and are energetic, curious, and playful." },
  { id: 10, category: "Cat", breed: "Ragdoll", age: 3, place: "Surat, India", buyer_name: "George Anderson", price: "₹28,000", image: "https://moderncat.com/wp-content/uploads/2013/09/Ragdoll-Header_bigstock-408978611_Rawlik.jpg", description: "Ragdolls are large, docile cats known for their soft, plush coats and tendency to go limp when held." },
  { id: 11, category: "Rabbit", breed: "Angora", age: 2, place: "Bangalore, India", buyer_name: "Jack Scott", price: "₹10,000", image: "https://nwyarns.com/cdn/shop/articles/Angora_Rabbit_1024x1024.jpg?v=1677712900", description: "Angora rabbits are known for their soft, long fur that requires regular grooming." },
  { id: 12, category: "Rabbit", breed: "Himalayan", age: 1, place: "Indore, India", buyer_name: "Grace Evans", price: "₹8,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXT5BOS1s_rQgvyD5Oh9ufOnKHji99pNyrA&s", description: "Himalayan rabbits are characterized by their white fur with dark markings on their ears, nose, and feet." },
  { id: 13, category: "Rabbit", breed: "Holland Lop", age: 3, place: "Mumbai, India", buyer_name: "Mia Phillips", price: "₹9,000", image: "https://images.unsplash.com/photo-1542052583981-1ded1ea9c224", description: "Holland Lops are small rabbits with distinctive lop ears that give them a cute, cuddly appearance." },
  { id: 14, category: "Rabbit", breed: "English Angora", age: 2, place: "Delhi, India", buyer_name: "Lucas Carter", price: "₹10,500", image: "https://images.unsplash.com/photo-1613471630425-5c0ec0bc7c9e", description: "English Angora rabbits are prized for their long, fine wool, which is often used to make garments." },
  { id: 15, category: "Rabbit", breed: "Mini Rex", age: 1, place: "Chennai, India", buyer_name: "Ethan Adams", price: "₹12,000", image: "https://images.unsplash.com/photo-1519378058455-974220a64442", description: "Mini Rex rabbits are known for their plush fur and friendly, docile nature." },
  {
    id: 16,
    category: "Dog",
    breed: "Pug",
    age: 2,
    place: "Nagpur, India",
    buyer_name: "Ella Stewart",
    price: "₹16,000",
    image: "https://nativepet.com/cdn/shop/articles/Pug-puppy-standing-on-a-bed.jpg?v=1667820606&width=1000",
    description: "Pugs are small, affectionate dogs with wrinkled faces and a loving, sociable temperament."
  },
  {
    id: 17,
    category: "Dog",
    breed: "Shih Tzu",
    age: 3,
    place: "Chandigarh, India",
    buyer_name: "Daniel Green",
    price: "₹22,500",
    image: "https://www.akc.org/wp-content/uploads/2017/11/Shih-Tzu-On-White-01.jpg",
    description: "Shih Tzus are small, friendly dogs with a luxurious coat, known for their adorable and outgoing personalities."
  },
  {
    id: 18,
    category: "Dog",
    breed: "Dachshund",
    age: 2,
    place: "Delhi, India",
    buyer_name: "Sophia Turner",
    price: "₹18,000",
    image: "https://www.akc.org/wp-content/uploads/2017/11/Dachshund-On-White-03.jpg",
    description: "Dachshunds are small but brave dogs with long bodies and short legs, originally bred for hunting."
  },
  {
    id: 19,
    category: "Dog",
    breed: "Cocker Spaniel",
    age: 4,
    place: "Kochi, India",
    buyer_name: "Mason Walker",
    price: "₹23,000",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZnn3VnSPGkfyUU6HfwIYixxLN4qqYTKEo5MTnGBtD1dqqU20FJy0kkEOckJLeT6RmlTJBUukbd5XoAyLyVBHeVQ",
    description: "Cocker Spaniels are affectionate, intelligent dogs known for their long ears and gentle demeanor."
  },
  { id: 20, category: "Cat", breed: "Scottish Fold", age: 3, place: "Pune, India", buyer_name: "Sophie Harris", price: "₹30,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL5c0CCsUxgkMuNc9jQFDnL6K3x4duir144w&s", description: "Scottish Folds are known for their distinctive folded ears and calm, playful nature." },
  { id: 21, category: "Cat", breed: "American Shorthair", age: 4, place: "Mumbai, India", buyer_name: "Noah Jackson", price: "₹23,000", image: "https://www.thesprucepets.com/thmb/8o5e2mkJcAr4kODvsllTf2xiioo=/4778x0/filters:no_upscale():strip_icc()/GettyImages-925319984-36b97d913d934d229d8b0d528a7da64e.jpg", description: "American Shorthairs are strong, muscular cats known for their adaptability and playful nature." },
  { id: 22, category: "Cat", breed: "Abyssinian", age: 2, place: "Chennai, India", buyer_name: "Ava King", price: "₹26,000", image: "https://www.thesprucepets.com/thmb/MigiLYeVSJcj0zkNVkJ--rALMZI=/2121x0/filters:no_upscale():strip_icc()/GettyImages-165827729-efc11c02690f457a81ef6ccbfa8eb34d.jpg", description: "Abyssinians are playful, curious cats with a distinctive ticked coat and energetic personalities." },
  { id: 23,
    category: "Bird",
    breed: "Indian Peacock",
    age: 4,
    place: "Mumbai, India",
    buyer_name: "John Doe",
    price: "₹15,000",
    image: "https://cdn.britannica.com/37/154237-050-A76A506D/blue-peafowl-tail-Indian-peacock-courtship-displays.jpg",
    description: "A majestic Indian peacock with iridescent blue and green feathers, known for its vibrant fan-like tail."
  },
  {
    id: 24,
    category: "Bird",
    breed: "Bald Eagle",
    age: 3,
    place: "New Delhi, India",
    buyer_name: "Jane Smith",
    price: "₹18,000",
    image: "https://images.unsplash.com/photo-1516542076529-1ea3854896c5",
    description: "Bald eagle, a symbol of strength, with striking white feathers on its head and large wingspan."
  },
  {
    id: 25,
    category: "Bird",
    breed: "Flamingo",
    age: 2,
    place: "Chennai, India",
    buyer_name: "Sarah Lee",
    price: "₹12,000",
    image: "https://images.unsplash.com/photo-1586076911480-4c0981b11d59",
    description: "A graceful flamingo with bright pink plumage, long legs, and a curved beak, commonly found near water bodies."
  },
  {
    id: 26,
    category: "Bird",
    breed: "Golden Pheasant",
    age: 5,
    place: "Bangalore, India",
    buyer_name: "Mark Brown",
    price: "₹20,000",
    image: "https://images.unsplash.com/photo-1580224185747-758d59a5f779",
    description: "Golden pheasants are known for their striking golden-red plumage and long tails, native to forests of China."
  },
  {
    id: 27,
    category: "Bird",
    breed: "Hyacinth Macaw",
    age: 6,
    place: "Hyderabad, India",
    buyer_name: "Emily Davis",
    price: "₹25,000",
    image: "https://images.unsplash.com/photo-1592198878413-d8bb8b7c2aa5",
    description: "Hyacinth macaws are the largest parrots, with stunning cobalt-blue feathers and intelligent, friendly nature."
  },
  {
    id: 28,
    category: "Bird",
    breed: "Scarlet Macaw",
    age: 3,
    place: "Pune, India",
    buyer_name: "Alice Green",
    price: "₹22,000",
    image: "https://images.unsplash.com/photo-1610806961280-0a56f4c6472f",
    description: "A colorful scarlet macaw with bright red feathers, complemented by yellow and blue wings."
  },
  {
    id: 29,
    category: "Bird",
    breed: "Snowy Owl",
    age: 4,
    place: "Kolkata, India",
    buyer_name: "Robert Wilson",
    price: "₹19,000",
    image: "https://images.unsplash.com/photo-1593642634443-44adaa06623a",
    description: "A snowy owl with striking white plumage and sharp yellow eyes, adapted to cold Arctic climates."
  },
  {
    id: 30,
    category: "Bird",
    breed: "Mandarin Duck",
    age: 2,
    place: "Ahmedabad, India",
    buyer_name: "Sophia Martinez",
    price: "₹16,000",
    image: "https://images.unsplash.com/photo-1520433402040-41b6a184fb83",
    description: "A Mandarin duck with vibrant orange, purple, and green feathers, often found near wooded lakes."
  },
  {
    id: 31,
    category: "Bird",
    breed: "Kingfisher",
    age: 1,
    place: "Jaipur, India",
    buyer_name: "David Taylor",
    price: "₹10,000",
    image: "https://images.unsplash.com/photo-1565211731836-fdd6b70edbc2",
    description: "A small kingfisher with bright blue and orange feathers, known for its exceptional fishing skills."
  },
  {
    id: 32,
    category: "Bird",
    breed: "Cockatiel",
    age: 2,
    place: "Lucknow, India",
    buyer_name: "Olivia Carter",
    price: "₹14,000",
    image: "https://images.unsplash.com/photo-1584697964276-3d5c9de83457",
    description: "A friendly cockatiel with a yellow crest, grey body, and orange cheek patches, ideal as a pet."
  },
  {
      id: 33,
      category: "Fish",
      breed: "Koi",
      age: 3,
      place: "Tokyo, Japan",
      buyer_name: "Sakura Tanaka",
      price: "₹75,000",
      image: "https://www.zoo-leipzig.de/fileadmin/_processed_/6/c/csm_Koi02_6bdaf56d73.jpg",
      description: "Koi fish symbolize good fortune and spiritual benefits. They are admired for their graceful swimming and stunning patterns."
    },
    {
      id: 34,
      category: "Fish",
      breed: "Clownfish",
      age: 1,
      place: "Sydney, Australia",
      buyer_name: "Liam Davis",
      price: "₹20,000",
      image: "https://images.unsplash.com/photo-1598454440479-94ba9b1d2d8c",
      description: "Clownfish are small, tropical fish known for their symbiotic relationship with sea anemones and striking orange and white stripes."
    },
    {
      id: 35,
      category: "Fish",
      breed: "Betta",
      age: 2,
      place: "Bangkok, Thailand",
      buyer_name: "Arjun Sharma",
      price: "₹15,000",
      image: "https://images.unsplash.com/photo-1572947650443-1f16b0b1e765",
      description: "Betta fish are renowned for their vivid colors and flowing fins, but they are also known for their aggressive behavior."
    },
    {
      id: 36,
      category: "Fish",
      breed: "Goldfish",
      age: 5,
      place: "London, UK",
      buyer_name: "Emma Watson",
      price: "₹8,000",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
      description: "Goldfish are popular for their easy maintenance and cheerful orange hues, often seen as a symbol of wealth and prosperity."
    },
    {
      id: 37,
      category: "Fish",
      breed: "Guppy",
      age: 1,
      place: "Mumbai, India",
      buyer_name: "Neha Kapoor",
      price: "₹5,000",
      image: "https://images.unsplash.com/photo-1583326926727-5f75b7d3ad76",
      description: "Guppies are small, hardy fish with a wide variety of colors, making them a favorite for aquariums."
    },
    {
      id: 38,
      category: "Fish",
      breed: "Discus",
      age: 3,
      place: "Berlin, Germany",
      buyer_name: "Hans Müller",
      price: "₹90,000",
      image: "https://images.unsplash.com/photo-1560689188-6ae29a8b8eea",
      description: "Discus fish are known for their vibrant, round bodies and peaceful demeanor, often considered the 'King of the Aquarium.'"
    },
    {
      id: 39,
      category: "Fish",
      breed: "Oscar",
      age: 4,
      place: "Rio de Janeiro, Brazil",
      buyer_name: "Carlos Silva",
      price: "₹25,000",
      image: "https://images.unsplash.com/photo-1579691049441-e4d0070dbf10",
      description: "Oscars are large, intelligent fish with bold personalities and striking patterns, often becoming quite interactive with their owners."
    },
    {
      id: 40,
      category: "Fish",
      breed: "Tetra",
      age: 2,
      place: "Cape Town, South Africa",
      buyer_name: "Chloe Smith",
      price: "₹7,000",
      image: "https://images.unsplash.com/photo-1618828666271-67f6c5b546b0",
      description: "Tetras are small, schooling fish with a variety of vibrant colors, ideal for community tanks."
    },
    {
      id: 41,
      category: "Fish",
      breed: "Angelfish",
      age: 3,
      place: "New York, USA",
      buyer_name: "Michael Brown",
      price: "₹30,000",
      image: "https://images.unsplash.com/photo-1543353071-873f17a7a088",
      description: "Angelfish are graceful and elegant with unique patterns, adding beauty and sophistication to aquariums."
    },
    {
      id: 42,
      category: "Fish",
      breed: "Arowana",
      age: 6,
      place: "Singapore",
      buyer_name: "Li Wei",
      price: "₹1,50,000",
      image: "https://images.unsplash.com/photo-1601305049746-9f2b77432bc4",
      description: "Arowanas are majestic fish often considered a symbol of wealth and prosperity in Asian cultures, with their sleek, elongated bodies."
    }
  ];

const transformedData = animalData.map((animal) => ({
  ...animal,
  price: animal.price.replace("₹", ""), // Remove ₹ symbol
}));

export default function AllData() {
  return transformedData;
}
