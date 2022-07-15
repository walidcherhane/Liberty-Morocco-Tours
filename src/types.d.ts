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
  required?: boolean;
}

type GalleryImageProps = {
  id: number;
  size: `small` | `large`;
  alt: string;
  src: string;
  gatsbyImageData?: any;
};

declare namespace ToursQuery {
  type gatsbyImageData = {
    backgroundColor: string;
    height: number;
    width: number;
    iamges: {
      fallback: {};
      sources: {
        sizes: string;
        srcset: string;
        type: string;
      }[];
    };
    layout: `fixed` | `full_width` | `constrained`;
  };
  type TourItemQuery = {
    allContentfulTour: {
      edges: Array<{
        node: {
          categories: Array<string>;
          cities: Array<string>;
          duration: number;
          id: string;
          price: number;
          rating: number;
          slug: string;
          tags: Array<string>;
          title: string;
          video: string | null;
          languages: Array<string>;
          previousPrice: number | null;
          description: { raw: string };
          comments: Array<{
            id: string;
            rating: number;
            comment: { raw: string };
            author: {
              id: string;
              name: string;
              avatar: {
                publicUrl: string;
                gatsbyImageData: any;
              };
            };
          } | null>;
          image: {
            publicUrl: string;
            gatsbyImageData: any;
          };
          images: Array<{
            publicUrl: string;
            gatsbyImageData: any;
          }>;
        };
      }>;
    };
  };
  type AllToursQuery = {
    allContentfulTour: {
      edges: Array<{
        node: {
          categories: Array<string>;
          cities: Array<string>;
          duration: number;
          id: string;
          price: number;
          rating: number;
          slug: string;
          tags: Array<string>;
          title: string;
          video: string | null;
          languages: Array<string>;
          previousPrice: number | null;
          description: { raw: string };
          comments: Array<{
            id: string;
            rating: number;
            comment: { raw: string };
            author: {
              id: string;
              name: string;
              avatar: {
                publicUrl: string;
                gatsbyImageData: any;
              };
            };
          } | null>;
          image: {
            publicUrl: string;
            gatsbyImageData: any;
          };
          images: Array<{
            publicUrl: string;
            gatsbyImageData: any;
          }>;
        };
      }>;
    };
  };
}
