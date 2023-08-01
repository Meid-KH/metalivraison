import { Fragment, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Transition } from "@headlessui/react";

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
	const menuContainerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const div = document.createElement("div");
		div.setAttribute("id", "mobile-menu-container");
		menuContainerRef.current = div;
		document.body.appendChild(div);

		return () => {
			if (menuContainerRef.current) {
				document.body.removeChild(menuContainerRef.current);
			}
		};
	}, []);

	return menuContainerRef.current
		? createPortal(
				<Transition show={isOpen} as={Fragment}>
					<Transition.Child
						enter="transition ease-in-out duration-300 transform"
						enterFrom="-translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-0"
						leaveTo="-translate-x-full"
					>
						<div
							className="fixed inset-0 z-10 bg-black bg-opacity-50"
							onClick={onClose}
						></div>
					</Transition.Child>
					<Transition.Child
						enter="transition ease-in-out duration-300 transform"
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
					>
						<div className="fixed top-0 bottom-0 right-0 z-20 w-4/5 p-4 bg-white md:w-1/2 lg:w-2/3 xl:w-3/4">
							{/* Mobile menu content */}
							<ul>
								<li>Menu Item 1</li>
								<li>Menu Item 2</li>
								{/* Add more menu items as needed */}
							</ul>
						</div>
					</Transition.Child>
				</Transition>,
				menuContainerRef.current
		  )
		: null;
};

export default MobileMenu;
