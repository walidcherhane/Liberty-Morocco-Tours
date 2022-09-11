import * as React from 'react';
import { BsCalendarDate, BsPerson } from 'react-icons/bs';
import { HiOutlineLocationMarker, HiSearch } from 'react-icons/hi';
import { MdOutlineDone } from 'react-icons/md';
import useWindowSize from '../hooks/useWindowSize';
import moment from 'moment';

import { DateRangePicker, FocusedInputShape } from 'react-dates';

import { Popover, Combobox, Transition } from '@headlessui/react';

const toursCities = [
  {
    id: 0,
    city: `Select a city`,
    default: true,
  },
  {
    id: 1,
    city: `Merzouga`,
  },
  {
    id: 2,
    city: `Casablanca`,
  },
  {
    id: 3,
    city: `Rabat`,
  },
  {
    id: 4,
    city: `Fes`,
  },
  {
    id: 5,
    city: `Marrakech`,
  },
  {
    id: 6,
    city: `Tanger`,
  },
  {
    id: 7,
    city: `Oujda`,
  },
  {
    id: 8,
    city: `Agadir`,
  },
  {
    id: 9,
    city: `Tetouan`,
  },
  {
    id: 10,
    city: `Meknes`,
  },
  {
    id: 11,
    city: `Salé`,
  },
  {
    id: 12,
    city: `Kénitra`,
  },
  {
    id: 13,
    city: `Safi`,
  },
  {
    id: 14,
    city: `Ouarzazate`,
  },
  {
    id: 15,
    city: `Taza`,
  },
];
interface DateRage {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
}

export default function DatePickRange() {
  const [citySearch, setCitySearch] = React.useState({
    selected: toursCities[0].city,
    query: ``,
  });
  const [travelers, setTravelers] = React.useState([
    {
      label: `Adults`,
      description: ` Ages 13 or above`,
      value: 0,
      min: 0,
      max: 10,
    },
    {
      label: `Children`,
      description: `Ages 2 - 12`,
      value: 0,
      min: 0,
      max: 3,
    },
  ]);
  const [stateDate, setStateDate] = React.useState<DateRage>({
    startDate: null,
    endDate: null,
  });
  const [dateFocused, setDateFocused] =
    React.useState<FocusedInputShape | null>(null);
  const [searchQueryData] = React.useState({
    startDate: stateDate.startDate,
    endDate: stateDate.endDate,
    city: citySearch.selected,
    travelers: travelers.map((traveler) => traveler.value),
  });

  const windowSize = useWindowSize();
  const total = travelers.reduce((acc, curr) => acc + curr.value, 0);
  const filteredCities =
    citySearch.query === ``
      ? toursCities
      : toursCities.filter(({ city }) =>
          city
            .toLowerCase()
            .replace(/\s+/g, ``)
            .includes(citySearch.query.toLowerCase().replace(/\s+/g, ``)),
        );
  const handleDateFocusChange = (focus: FocusedInputShape | null) => {
    setDateFocused(focus);
  };
  const handleToursSearch = () => {
    console.log(searchQueryData);
  };

  const renderInputCheckInDate = () => {
    const focused = dateFocused === `startDate`;
    return (
      <div
        className={`relative cursor-pointer flex-grow flex items-center gap-4 -z-10 ${
          focused ? `text-blue-400` : ` `
        }`}
      >
        <div className="text-2xl text-gray-400">
          <BsCalendarDate />
        </div>
        <div className="flex-grow">
          <span className="block text-2xl  font-bold">
            {stateDate.startDate
              ? stateDate.startDate.format(`DD MMM`)
              : `Check in`}
          </span>
          <span className="mt-1 block  text-sm font-semibold leading-none text-gray-400">
            {stateDate.startDate ? `Check in` : `Add date`}
          </span>
        </div>
      </div>
    );
  };

  const renderInputCheckOutDate = () => {
    const focused = dateFocused === `endDate`;
    return (
      <div
        className={`relative flex cursor-pointer flex-grow items-center gap-4  -z-10 ${
          focused ? `  text-blue-400 ` : ` `
        }`}
      >
        <div className="text-2xl text-gray-400">
          <BsCalendarDate />
        </div>
        <div className="font-poppins flex-grow">
          <span className="block text-2xl  font-bold">
            {stateDate.endDate
              ? stateDate.endDate.format(`DD MMM`)
              : `Check out`}
          </span>
          <span className="mt-1 block  text-sm  font-semibold leading-none text-gray-400">
            {stateDate.endDate ? `Check out` : `Add date`}
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="rounded-3xl border border-white bg-gray-50/90 p-8 shadow-2xl backdrop-blur md:p-8  ">
        <div className=" relative flex gap-4 w-full flex-col  xl:flex-row items-center">
          <div className="font-poppins flex gap-8 flex-grow  flex-col xl:flex-row  w-full ">
            <div className="relative flex gap-8 w-full flex-col justify-start  text-3xl font-bold text-gray-800 md:flex-row   ">
              <div className="flex-grow flex items-center gap-4  z-0">
                <div className="text-2xl text-gray-400">
                  <HiOutlineLocationMarker />
                </div>
                <Combobox
                  value={citySearch.selected}
                  onChange={(value) =>
                    setCitySearch({ ...citySearch, selected: value })
                  }
                >
                  <div className="w-full z-20 text-2xl font-bold text-gray-800">
                    <Combobox.Input
                      className="bg-transparent text-2xl font-bold font-poppins text-gray-800 outline-none md:w-full"
                      displayValue={(city: any) => city}
                      onChange={(e) =>
                        setCitySearch({ ...citySearch, query: e.target.value })
                      }
                      placeholder="Location"
                    />
                    <div className="text-sm font-semibold text-gray-400">
                      Where are you going?
                    </div>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Combobox.Options className="custom-scroll w-full absolute  left-0 z-20  mt-2 max-h-60 w-full   snap-y    overflow-y-scroll rounded-md bg-white py-1  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredCities.length === 0 &&
                        citySearch.query !== `` ? (
                          <div className="relative cursor-default select-none py-8 px-4  text-center text-sm font-normal capitalize text-gray-400">
                            This city is not available, please contact us for
                            special requests.
                          </div>
                        ) : (
                          filteredCities.map(({ city }) => (
                            <Combobox.Option
                              key={city}
                              value={city}
                              className={({ active }) =>
                                `relative cursor-default select-none snap-center py-2 pl-10 pr-4 ${
                                  active
                                    ? `bg-blue-600 text-white`
                                    : `text-gray-900`
                                }`
                              }
                            >
                              {({ active, selected }) => (
                                <li>
                                  <span
                                    className={`block truncate ${
                                      selected ? `font-medium` : `font-normal`
                                    }`}
                                  >
                                    {city}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                        active ? `text-white` : `text-blue-600`
                                      }`}
                                    >
                                      <MdOutlineDone className="h-5 w-5" />
                                    </span>
                                  ) : null}
                                </li>
                              )}
                            </Combobox.Option>
                          ))
                        )}
                      </Combobox.Options>
                    </Transition>
                  </div>
                </Combobox>
              </div>

              <div className="flex-grow flex items-center gap-4 relative  -z-10">
                <div className="text-2xl text-gray-400">
                  <BsPerson />
                </div>
                <Popover>
                  <Popover.Button className="flex   font-bold text-gray-800 outline-none">
                    <input
                      type="text"
                      readOnly
                      value={total > 0 ? total + ` Guests` : `Travelers`}
                      className="bg-transparent text-2xl font-bold font-poppins text-gray-800 outline-none md:w-full"
                    />
                  </Popover.Button>
                  <div className="text-sm font-semibold text-gray-400">
                    Travelers
                  </div>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Popover.Panel className="absolute bottom-20 right-3 md:right-[57%] z-50  translate-x-1/2 ">
                      <div className="w-[400px]  rounded-xl border-2 bg-white  p-4">
                        {travelers.map((traveler: any, index: number) => (
                          <div className="flex p-4" key={index}>
                            <div className=" font-poppins grow">
                              <div className=" text-lg font-semibold text-gray-700">
                                {traveler.label}
                              </div>
                              <div className="text-sm  text-gray-400 font-light">
                                {traveler.description}
                              </div>
                            </div>
                            <div className="flex items-center text-base">
                              <button
                                disabled={traveler.value === 0}
                                onClick={() => {
                                  if (traveler.value > traveler.min) {
                                    setTravelers([
                                      ...travelers.slice(0, index),
                                      {
                                        ...traveler,
                                        value: traveler.value - 1,
                                      },
                                      ...travelers.slice(index + 1),
                                    ]);
                                  }
                                }}
                                className="h-7 w-7  rounded-full border text-center  font-bold text-gray-500 disabled:cursor-not-allowed disabled:text-gray-300   "
                              >
                                -
                              </button>
                              <div className="grow px-4  font-semibold text-gray-500 ">
                                {traveler.value}
                              </div>
                              <button
                                disabled={traveler.value >= traveler.max}
                                onClick={() => {
                                  if (traveler.value < traveler.max) {
                                    setTravelers([
                                      ...travelers.slice(0, index),
                                      {
                                        ...traveler,
                                        value: traveler.value + 1,
                                      },
                                      ...travelers.slice(index + 1),
                                    ]);
                                  }
                                }}
                                className="h-7 w-7 rounded-full border text-center  font-bold text-gray-500 disabled:cursor-not-allowed disabled:text-gray-300   "
                              >
                                +
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              </div>
            </div>
            <div className=" relative flex gap-8 w-full flex-col justify-start text-3xl font-bold text-gray-800 md:flex-row ">
              <div className="absolute">
                <DateRangePicker
                  startDate={stateDate.startDate}
                  endDate={stateDate.endDate}
                  focusedInput={dateFocused}
                  startDateId="startDate"
                  endDateId="endDate"
                  onDatesChange={(date) => setStateDate(date)}
                  onFocusChange={handleDateFocusChange}
                  numberOfMonths={windowSize.width <= 1024 ? 1 : undefined}
                  daySize={windowSize.width > 500 ? 45 : undefined}
                  noBorder
                  hideKeyboardShortcutsPanel
                />
              </div>
              {renderInputCheckInDate()}
              {renderInputCheckOutDate()}
            </div>
          </div>
          <button
            onClick={() => {
              handleToursSearch();
            }}
            className=" mt-4 flex  w-full items-center justify-center  rounded-2xl bg-gray-600 p-4 text-xl  text-neutral-50   hover:bg-gray-700 xl:mt-0 xl:w-auto xl:p-6 "
          >
            <HiSearch />
          </button>
        </div>
      </div>
    </>
  );
}
