import brazaside from "../assets/brazaside-shirt.jpeg";
import smokey from "../assets/djsmokey-shirt.jpeg";
import cassete from "../assets/bvndit-cassete.jpeg";
import vinyl from "../assets/bvndit-vinyl.jpeg";

const products = [
  {
    id: 1,
    name: "BrazaSide Clan Shirt",
    price: "R$ 79,90",
    img: brazaside,
    type: "shirt",
    color: "black",
    description:
      "Step into the movement with the BrazaSide Clan Shirt — an essential piece for those who live and breathe street culture. Made from premium cotton, this black tee carries attitude and identity, representing the raw power of the underground scene. Perfect for those who live the sound and the hustle, from the block to the world.",
  },
  {
    id: 2,
    name: "DJ Smokey Shirt",
    price: "R$ 99,90",
    img: smokey,
    type: "shirt",
    color: "black",
    description:
      "Straight from the depths of experimental trap, the DJ Smokey Shirt is more than just apparel — it’s a tribute to the creative mind behind the psychedelic beats that shook the streets and clubs. Comfortable, bold, and unapologetically unique, it’s made for those who don’t follow trends — they start them.",
  },
  {
    id: 3,
    name: "Most Wanted Cassete",
    price: "R$ 149,90",
    img: cassete,
    type: "cassete",
    description:
      "Bring back that analog flavor with BVNDIT’s Most Wanted Cassette Tape. A rare gem for collectors and fans of raw, nostalgic sound. Featuring exclusive cover art and an old school sonic vibe, this relic is a time machine to an era of rebellion and creative freedom.",
  },
  {
    id: 4,
    name: "Scratch Mix Vinyl",
    price: "R$ 199,90",
    img: vinyl,
    type: "vinyl",
    description:
      "For vinyl lovers and beat seekers, BVNDIT’s Scratch Mix is pure fire. With handpicked tracks and rhythm that bends time, this record is the missing link in your collection. Pressed on high-quality vinyl with exclusive cover art — a physical tribute to underground culture.",
  },
];

export default products;
