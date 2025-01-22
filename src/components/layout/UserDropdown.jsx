'use client';

import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function UserDropdown({ user }) {
  const [imageError, setImageError] = useState(false);

  const getInitials = () => {
    if (user?.name) {
      return user.name.split(' ').map(n => n[0]).join('').toUpperCase();
    }
    return user?.email?.[0]?.toUpperCase() || '?';
  };

  const renderAvatar = () => {
    if (user?.image && !imageError) {
      return (
        <Image
          className="h-8 w-8 rounded-full object-cover"
          src={user.image}
          alt=""
          width={32}
          height={32}
          onError={() => setImageError(true)}
        />
      );
    }
    
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
        <span className="text-sm font-medium text-indigo-600">
          {getInitials()}
        </span>
      </div>
    );
  };

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="sr-only">Open user menu</span>
          {renderAvatar()}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="border-b border-gray-100 px-4 py-2">
            <p className="text-sm font-medium text-gray-900">{user?.name || 'User'}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/profile"
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                Your Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/settings"
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                Settings
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block w-full px-4 py-2 text-left text-sm text-gray-700'
                )}
              >
                Sign out
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
