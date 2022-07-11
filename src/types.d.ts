import * as React from 'react';
export interface InputProps {
  component?: any;
  label: string;
  type: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  icon?: string;
  className?: string;
  ref?: React.Ref<any>;
  value?: string;
}
export interface TourProps {
  id: number;
  title: string;
  description: string;
  slug: string;
  price: string;
  previousPrice: string;
  image: string;
  video: string;
  cities: string[];
  languages: string[];
  tags: string[];
  duration: string;
  comments: {
    id: number;
    Author: {
      name: string;
      avatar: string;
      from: string;
    };
    comment: string;
    date: string;
    rating: number;
  }[];
  images: string[];
  rating: number;
  reviews: number;
  categories: string[];
}
