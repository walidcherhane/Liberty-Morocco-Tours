/* eslint-disable no-undef */
/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { ImPriceTag } from 'react-icons/im';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
  MdKeyboardArrowRight,
  MdOutlineAccessTimeFilled,
} from 'react-icons/md';
import ImagesGallery from '@/components/ImagesGallery';
import { graphql, Link, PageProps } from 'gatsby';
import Tours from '@/data/tours';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import React, { ReactNode } from 'react';
import { ToursQuery } from '@/types';

export declare type NodeData = Record<string, any>;

export interface Node {
  readonly nodeType: string;
  data: NodeData;
}
const options = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <b className="font-bold">{text}</b>,
    [MARKS.ITALIC]: (text: ReactNode) => <i className="font-italic">{text}</i>,
    [MARKS.UNDERLINE]: (text: ReactNode) => <u className="underline">{text}</u>,
    [MARKS.CODE]: (text: ReactNode) => (
      <code className="p-2 bg-gray-200 rounded-lg">{text}</code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: Node, children: React.ReactNode) => (
      <p className="text-gray-500 text-base ">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (_: Node, children: React.ReactNode) => (
      <h1 className="text-2xl font-semibold my-4">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_: Node, children: React.ReactNode) => (
      <h2 className="text-xl font-semibold my-4">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_: Node, children: React.ReactNode) => (
      <h3 className="text-lg font-semibold my-4">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (_: Node, children: React.ReactNode) => (
      <h4 className="text-md font-semibold my-4">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (_: Node, children: React.ReactNode) => (
      <h5 className="text-sm font-semibold my-4">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (_: Node, children: React.ReactNode) => (
      <h6 className="text-xs font-semibold my-4">{children}</h6>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      const { title, description, file } = node.data.target.fields;
      const { url } = file[`en-US`];
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title[`en-US`]}
        </a>
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: Node) => {
      const { title, description, fields } = node.data.target;
      return (
        <a
          href={fields.slug[`en-US`]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title[`en-US`]}
        </a>
      );
    },
    [BLOCKS.UL_LIST]: (_: Node, children: React.ReactNode) => (
      <ul className="list-disc list-inside ">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_: Node, children: React.ReactNode) => (
      <ol className="list-decimal list-inside ">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_: Node, children: React.ReactNode) => (
      <li className="my-2 block  ">{children}</li>
    ),
    [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline underline-offset-2"
      >
        {children}
      </a>
    ),
  },
};

type TourProps =
  ToursQuery.TourItemQuery['allContentfulTour']['edges'][0]['node'];

const renderRatingStars = (rating: number) => {
  const stars = [];
  if (rating % 1 !== 0) {
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<BsStarFill />);
    }
    stars.push(<BsStarHalf />);
  } else {
    for (let i = 0; i < rating; i++) {
      stars.push(<BsStarFill />);
    }
  }
  return stars;
};

const renderInfoList = (Tour: TourProps) => {
  const listItems = [
    {
      icon: <MdOutlineAccessTimeFilled className="text-sky-400" />,
      text: `${Tour.duration} day${
        Tour?.duration && Tour.duration > 1 ? `s` : ``
      }`,
    },
    {
      icon: <BsStarFill className="text-sky-400" />,
      text: `${Tour.rating} Stars`,
    },
    {
      icon: <ImPriceTag className="text-sky-400" />,
      text: `${Tour.price} $`,
    },
  ];
  return (
    <div className="bg-gray-50 p-4 border rounded-xl flex  items-center">
      {listItems.map((item, index) => (
        <div
          key={index}
          className="inline-flex items-center gap-3 text-sky-400 mx-auto "
        >
          {item.icon}
          <div className="text-sm text-gray-400  capitalize ">
            <span>{item.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const renderImages = (Tour: TourProps) => {
  const images = Tour.images;
  // if the object is null return nothing
  if (images === null) {
    return null;
  }
  const TourImageGallery = Array.from({ length: images.length }, (_, index) => {
    return {
      id: index,
      src: images[index]?.publicUrl,
      size: index <= 3 ? `small` : `large`,
      gatsbyImageData: images[index]?.gatsbyImageData,
    };
  });
  if (TourImageGallery[0].src === undefined) return null;
  return (
    <>
      <h1 className="text-gray-900 text-2xl font-semibold  ">Photo Gallery</h1>
      <p className="text-sm text-gray-400 my-3">
        Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <ImagesGallery Gallery={TourImageGallery} />
    </>
  );
};

const renderTourInfoTable = (Tour: TourProps) => {
  const tableItems = [
    {
      title: `Cities`,
      value: Tour?.cities && Tour.cities.map((city) => city).join(`, `),
    },
    {
      title: `Tour Category`,
      value:
        (Tour.categories &&
          Tour.categories.map((category) => category).join(`, `)) ||
        null,
    },
    {
      title: `Tour Tags`,
      value: Tour.tags && Tour.tags.join(`, `),
    },
    {
      title: `Tour Duration`,
      value: Tour.duration
        ? Tour.duration + ` day${Tour.duration > 1 ? `s` : ``}`
        : null,
    },
    {
      title: `Tour Rating`,
      value: Tour.rating && (
        <span className="flex items-center">
          {renderRatingStars(Tour.rating)}
          <span className="text-gray-400 ml-2">{Tour.rating}</span>
        </span>
      ),
    },
    {
      title: `Tour Price`,
      value: (
        <>
          <span className="text-sky-400">${Tour.price}</span>
          <span className="text-gray-400"> / person</span>
          <span className="text-gray-400 ml-2">
            {Tour.previousPrice && (
              <span className="text-gray-400 line-through	">
                {` `}
                (${Tour.previousPrice} / person)
              </span>
            )}
          </span>
        </>
      ),
    },
  ];
  return (
    <div className="bg-gray-50/20 p-4 border rounded-xl flex flex-col items-center">
      <table className="text-left w-full border-collapse">
        <tbody>
          {tableItems.map(
            (item, index) =>
              item.value && (
                <tr className="hover:bg-gray-50" key={index}>
                  <td
                    className={`py-4 md:px-6  ${
                      index !== tableItems.length - 1 && `border-b`
                    } border-grey-light`}
                  >
                    {item.title}
                  </td>
                  <td
                    className={`py-4 md:px-6  ${
                      index !== tableItems.length - 1 && `border-b`
                    } border-grey-light`}
                  >
                    <p className="text-gray-400 font-semibold py-1 px-3 rounded text-sm">
                      {item.value}
                    </p>
                  </td>
                </tr>
              ),
          )}
        </tbody>
      </table>
    </div>
  );
};

const renderAddCommentForm = () => {
  const formFields = [
    {
      label: `Name`,
      name: `name`,
      type: `text`,
      placeholder: `Enter your name`,
      required: true,
    },
    {
      label: `Email`,
      name: `email`,
      type: `email`,
      placeholder: `Enter your email`,
      required: true,
    },
    {
      label: `Client Code`,
      name: `clientCode`,
      type: `text`,
      placeholder: `Enter your client code`,
      required: true,
    },
    {
      label: `Rating`,
      name: `rating`,
      type: `number`,
      placeholder: `Enter your rating`,
      required: true,
    },
    {
      label: `Comment`,
      name: `comment`,
      type: `textarea`,
      placeholder: `Enter your comment`,
      required: true,
    },
  ];

  return (
    <>
      <h1 className="text-gray-900 text-2xl font-semibold  ">
        Add your comment
      </h1>
      <div className="mt-2">
        <form>
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            {formFields.map((field, index) => (
              <div
                key={index}
                className={
                  field.type === `textarea` ? `col-span-2` : `col-span-1`
                }
              >
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {field.label}
                </label>
                {field.type === `textarea` ? (
                  <textarea
                    className="w-full h-32 px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-lg  focus:border-gray-400 outline-none"
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    className="bg-gray-50 border-2 border-gray-300 focus:border-gray-400 outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                )}
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="text-white bg-blue-400 hover:bg-blue-500  focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-md shadow-xl shadow-blue-200  w-full sm:w-auto px-7 py-2.5 "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

const renderTourComments = (Tour: TourProps) => {
  const comments = Tour.comments;
  if (!comments) return;
  return (
    <>
      <h1 className="text-gray-900 text-2xl font-semibold  ">
        Comments ({comments.length})
      </h1>
      <p className="text-sm text-gray-400 mt-3">
        Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className="flex flex-col gap-4 my-8">
        {comments.map((comment) => {
          const authorImage =
            comment?.author.avatar.gatsbyImageData &&
            getImage(comment?.author.avatar.gatsbyImageData);
          return (
            <div
              className="flex flex-col items-start border rounded-2xl p-8 grow gap-4"
              key={comment?.id}
            >
              <div className="flex items-center   grow gap-2">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-100">
                  {authorImage && (
                    <GatsbyImage image={authorImage} alt="author" />
                  )}
                </div>
                <div className="flex-1">
                  {comment?.author && (
                    <h3 className="text-gray-800 font-semibold py-1 px-3 ">
                      {comment.author.name}
                    </h3>
                  )}
                  {comment?.rating && (
                    <h6 className="text-gray-400 flex gap-4  px-3 text-xs ">
                      <span className="flex">
                        {renderRatingStars(comment?.rating)}
                        <span className="text-gray-400 ml-2">
                          {comment?.rating}
                        </span>
                      </span>
                    </h6>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-2 ml-4 indent-10">
                {renderRichText(comment?.comment, options)}
              </p>
            </div>
          );
        })}
      </div>
      {renderAddCommentForm()}
    </>
  );
};

const renderTourDescription = (Tour: TourProps) => {
  console.log(Tour);
  return (
    Tour.description && (
      <>
        <h1 className="text-gray-900 text-2xl font-semibold  ">Overview</h1>
        <p className="font-light text-sm text-gray-500 mt-3  ">
          {renderRichText(Tour.description, options)}
        </p>
      </>
    )
  );
};

const renderTourBookFrom = () => {
  const formFields = [
    {
      label: `Name`,
      name: `name`,
      type: `text`,
      placeholder: `Enter your name`,
      required: true,
    },
    {
      label: `Email`,
      name: `email`,
      type: `email`,
      placeholder: `Enter your email`,
      required: true,
    },
    {
      label: `Phone`,
      name: `phone`,
      type: `tel`,
      placeholder: `Enter your phone`,
      required: true,
    },
    {
      label: `Number of people`,
      name: `people`,
      type: `number`,
      placeholder: `Enter number of people`,
      required: true,
    },
    {
      label: `Check-in date`,
      name: `chekin`,
      type: `date`,
      placeholder: `Enter the check in date`,
      required: true,
    },
    {
      label: `Check-out date`,
      name: `checkout`,
      type: `date`,
      placeholder: `Enter the check out date`,
      required: true,
    },
    {
      label: `Message`,
      name: `message`,
      type: `textarea`,
      placeholder: `Enter message`,
      required: true,
    },
  ];

  return (
    <>
      <div className="bg-gray-50 p-8 border">
        <h1 className="text-sky-500 text-3xl font-bold uppercase">
          Book This Tour
        </h1>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur, nisl eget consectetur sagittis, nisl nunc consectetur
        </p>
        <form className="mt-4">
          <div className="grid gap-2  mb-6   lg:grid-cols-2">
            {formFields.map((field, index) => (
              <div
                key={index}
                className={field.type === `textarea` ? `col-span-2` : ``}
              >
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {field.label}
                </label>
                {field.type === `textarea` ? (
                  <textarea
                    className="w-full h-32 px-4 py-2 bg-gray-50 border-2 border-gray-300 rounded-lg  focus:border-gray-400 outline-none"
                    placeholder={field.placeholder}
                    required={field.required}
                    name={field.name}
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    className="bg-gray-50 border-2 border-gray-300 focus:border-gray-400 outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                )}
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book Now
          </button>
        </form>
      </div>
    </>
  );
};

const renderTourVideo = (Tour: TourProps) => {
  if (!Tour.video) return;
  return (
    <div className="  h-[400px] border  transform overflow-hidden bg-white  text-left align-middle  transition-all">
      <iframe
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        width="100%"
        height="100%"
        marginWidth={0}
        src={`https://www.youtube.com/embed/${
          Tour?.video.split(`/`)[Tour?.video.split(`/`).length - 1]
        }`}
      />
    </div>
  );
};

const renderSimilarTours = (Tour: TourProps) => {
  if (!Tour.tags) return;
  const similarTours = Tour?.tags
    .map((tag) => {
      if (!tag) return null;
      return Tours.filter(({ tags, id }) => {
        return tags.includes(tag) && id !== parseInt(Tour.id);
      });
    })
    // flatten the array
    .flat()
    // show only 4 tours
    .slice(0, 4);
  return (
    <>
      {similarTours.length > 0 && (
        <>
          <h1 className="text-sky-500 text-3xl font-bold uppercase">
            Similar Tours
          </h1>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            consectetur, nisl eget consectetur sagittis, nisl nunc consectetur
          </p>
          <div className="mt-9  grid grid-col-1 lg:grid-cols-2  gap-4">
            {similarTours.map((tour) => {
              if (!tour) return null;
              return (
                <Link key={tour.id} to={`/Tours/${tour.slug}`}>
                  <div className="cursor-pointer font-poppins ">
                    <div className="h-full rounded-2xl bg-gray-50 border overflow-hidden">
                      <img
                        width={300}
                        height={192}
                        className="h-48 lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                        src="/images/Destinations/1.jpg"
                        alt="blog"
                      />
                      <div className="p-6 ">
                        <h6 className="tracking-widest text-xs flex justify-start gap-1 flex-wrap  font-medium text-gray-400 mb-2">
                          {/* Categories */}
                          {tour.categories.map((category) => (
                            <span key={category} className="mx-1">
                              {category}
                            </span>
                          ))}
                        </h6>
                        <h1 className="  font-semibold text-gray-600 mb-3">
                          {tour.title}
                        </h1>
                        <p className="leading-relaxed mb-3 text-xs">
                          {tour.description.substring(0, 80)}...
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

const renderNeedHelp = () => {
  return (
    <div className="mx-auto max-w-4xl rounded-3xl bg-blue-900 p-10 text-center">
      <h1 className="text-2xl md:text-4xl capitalize font-bold leading-tight text-white">
        Need a help ?
      </h1>
      <p className="mt-5 text-sm  text-white">
        Get unlimited design & development requests for a flat monthly rate.
        Fast turnaround. No contracts or surprises. Cancel anytime.
      </p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <Link to="/Contact/Contact1">
          <button className=" flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 md:text-lg font-medium text-white">
            <span> Contact Us</span>
            <MdKeyboardArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

function Tour({ data }: PageProps<ToursQuery.TourItemQuery>) {
  const tour = data.allContentfulTour.edges[0].node;
  return (
    <>
      <Header />
      <div className="relative font-poppins h-[360px] ">
        {tour.image?.publicUrl && (
          <img
            src={tour.image.publicUrl}
            className="absolute inset-0 -z-10 object-cover w-full h-full filter saturate-150 object-center"
            alt=""
          />
        )}
        <div className="bg-gradient-to-t  from-black/80 to-transparent  p-8 absolute bottom-0 inset-x-0 ">
          <div className="container mx-auto ">
            {tour.rating && (
              <>
                <div className="text-xl flex items-center gap-2 font-semibold text-yellow-400 mb-4">
                  {renderRatingStars(tour.rating)}
                  {` `}
                  <span className="text-lg ml-2">{tour.rating}</span>
                </div>
              </>
            )}
            <div className="text-3xl md:text-4xl uppercase font-bold text-white">
              {tour.title}
            </div>
          </div>
        </div>
      </div>
      <div className="container  mx-auto  font-poppins  ">
        <div className="m-10 mt-4 grid lg:grid-cols-2 gap-8">
          <div className="mt-4">
            <div className="mt-8">{renderTourDescription(tour)}</div>
            <div className="mt-8">{renderInfoList(tour)}</div>
            <div className="mt-8">{renderImages(tour)}</div>
            <div className="mt-8">{renderTourInfoTable(tour)}</div>
            <div className="mt-8">{renderTourComments(tour)}</div>
          </div>
          <div className="mt-4">
            <div className="mt-8">{renderTourVideo(tour)}</div>
            <div className="mt-8">{renderTourBookFrom()}</div>
            <div className="mt-8">{renderSimilarTours(tour)}</div>
            <div className="mt-8">{renderNeedHelp()}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export const query = graphql`
  query TourItem($slug: String!) {
    allContentfulTour(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          categories
          cities
          duration
          id
          price
          rating
          slug
          tags
          title
          description {
            raw
          }
          video
          languages
          previousPrice
          comments {
            id
            rating
            comment {
              raw
            }
            author {
              ... on ContentfulClient {
                id
                name
                avatar {
                  publicUrl
                  gatsbyImageData
                }
              }
            }
          }
          image {
            publicUrl
            gatsbyImageData
          }
          images {
            publicUrl
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Tour;
