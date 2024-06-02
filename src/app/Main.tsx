"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import all_bags from '@/assets/images/all_bags.png';
import vanity_pouch from '@/assets/images/pouch.png';
import tote_bag from '@/assets/images/tote_bag.png';
import duffle_bag from '@/assets/images/duffle_bag.png';
import laptop_sleeve from '@/assets/images/laptop_sleeve.png';
import messenger_bag from '@/assets/images/messenger_bag.png';
import slings_bag from '@/assets/images/sling_bag.png';
import handbag from '@/assets/images/hand_bag.png';
import bucket_bag from '@/assets/images/bucket_bag.png';
import cart_icon from '@/assets/icons/cart.png';
import Card from '@/components/Card';
import axios from 'axios';

const Main = () => {   
    const [products, setProducts] = useState([]);

    useEffect(()=>{   
      getProducts();      
    }, []);

    const getProducts = async ()=>{      
        await axios.get('https://fakestoreapi.com/products').then(res=>{          
          setProducts(res.data);
        });              
    }

    return (
      <div className="p-8 text_color_1">
        <div className="flex flex-row justify-between height1 pb-1.5 text_2">
          <div className="flex flex-col justify-center border1">
            <Image src={all_bags} alt='category' />
            <div className='text-center pt-4'>
              <span>All Bags</span>          
            </div>          
          </div>
          <div className="border1">
            <Image src={vanity_pouch} alt='category' />
            <div className='text-center pt-4'>
              <span>Vanity Pouch</span>          
            </div>                    
          </div>
          <div className="border1">
            <Image src={tote_bag} alt='category' />
            <div className='text-center pt-4'>
              <span>Tote Bag</span>          
            </div>                    
          </div>
          <div className="border1">
            <Image src={duffle_bag} alt='category' />
            <div className='text-center pt-4'>
              <span>Duffle Bag</span>          
            </div>                    
          </div>
          <div className="border1">
            <Image src={laptop_sleeve} alt='category' />
            <div className='text-center pt-4'>
              <span>Laptop Sleeve</span>          
            </div>                    
          </div>
          <div className="border1">
            <Image src={messenger_bag} alt='category' />
            <div className='text-center pt-4'>
              <span>Messenger Bags</span>          
            </div>                    
          </div>
          <div className="border1">
            <Image src={slings_bag} alt='category' />
            <div className='text-center pt-4'>
              <span>Slings Bgs</span>          
            </div>                    
          </div>
          <div className="border1">
            <Image src={handbag} alt='category' />
            <div className='text-center pt-4'>
              <span>Handbags</span>          
            </div>                    
          </div>
          <div className="border1">
            <Image src={bucket_bag} alt='category' />
            <div className='text-center pt-4'>
              <span>Bucket Bag</span>          
            </div>                    
          </div>
        </div>
        <div className='flex flex-row pt-8 text_3'>
          <div className='basis-1/2'>
            <div className='flex flex-row items-center'>
              <span>Bags</span>
              <span className='px-3'>
                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="3" r="2.5" fill="#E5DFD9"/>
                </svg>
              </span>
              <span>Backpacks</span>
            </div>          
          </div>
          <div className='basis-1/2 text-right'>
            <div className='flex flex-row justify-end items-center'>
              <span className='pr-3'>{products && products.length} products</span>  
              <div>
                <Image src={cart_icon} alt='category' />
              </div>          
            </div>          
          </div>
        </div>
        <div className='flex flex-row flex-wrap justify-between pt-10'>
          { products.length && products.map((product:any)=>{
              return <div className='width_23' key={`product_${product.id}`}><Card product={product} /></div>
            })
          }          
        </div>
      </div>
    )
}

export default Main
