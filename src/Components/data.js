// curtainsData.j
import Vintage from './Images/Vintag-Floral.jpg'
import Embroidered from './Images/embroidered-sheer-curtains.jpg'
import kids from './Images/kids-room-curtains.jpg'
import Lace from './Images/lace-panel-curtains.jpg'
import Modern from './Images/modern-sheer-curtains.jpg'
import Stripped from './Images/striped-linen-curtains.jpg'
import TiedUp from './Images/Tie-Up Shade Curtains.jpg'
import Elegent from './Images/elegant-velvet-curtains.jpg'
import Classic from './Images/classic-curtains.jpg'
import blackout from './Images/blackout-window-curtains.jpg'



const curtains = [
    {
      name: 'Classic Curtains',
      id:  1,
      price: 50,
      color: 'Blue',
      size: '60x84 inches',
      material: 'Cotton',
      image: Classic
    },
    {
      name: 'Modern Sheer Curtains',
      id: 2,
      price: 40,
      color: 'White',
      size: '52x63 inches',
      material: 'Polyester',
      image: Modern
    },
    // Add more curtain objects
    {
      name: 'Elegant Velvet Curtains',
      id:  3,
      price: 70,
      color: 'Burgundy',
      size: '50x96 inches',
      material: 'Velvet',
      image:Elegent
    },
    {
      name: 'Striped Linen Curtains',
      id:  4,
      price: 45,
      color: 'Beige',
      size: '48x72 inches',
      material: 'Linen',
      image: Stripped
    },
    {
      name: 'Vintage Floral Curtains',
      id:  5,
      price: 55,
      color: 'Floral',
      size: '54x84 inches',
      material: 'Polyester',
      image: Vintage
    },
    {
      name: 'Blackout Window Curtains',
      id:  6,
      price: 60,
      color: 'Gray',
      size: '42x84 inches',
      material: 'Polyester',
      image: blackout
    },
    {
      name: 'Embroidered Sheer Curtains',
      id:  7,
      price: 35,
      color: 'Ivory',
      size: '58x63 inches',
      material: 'Polyester',
      image: Embroidered
    },
    {
      name: 'Tie-Up Shade Curtains',
      id:  8,
      price: 30,
      color: 'Taupe',
      size: '46x63 inches',
      material: 'Polyester',
      image: TiedUp
    },
    {
      name: 'Lace Panel Curtains',
      id:  9,
      price: 50,
      color: 'White',
      size: '56x84 inches',
      material: 'Polyester',
      image: Lace
    },
    {
      name: 'Kids Room Curtains',
      id:  10,
      price: 25,
      color: 'Pink',
      size: '42x63 inches',
      material: 'Polyester',
      image: kids // Example image file name
    },
  ];
  
  export default curtains;
  