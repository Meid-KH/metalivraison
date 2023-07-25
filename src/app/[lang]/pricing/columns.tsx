"use client";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
	id: string;
	city: string;
	shippingFee: number;
	refusalFee: number;
	returnFee: number | string;
	deliveryTime: number;
};

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: "city",
		header: ({ column }) => {
			return (
				<Button
					variant={"ghost"}
					size={"sm"}
					className="h-8 py-1 -ml-3 hover:bg-gray-200"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Ville
					<ArrowUpDown className="flex-shrink-0 w-4 h-4 ml-1" />
				</Button>
			);
		},
	},
	{
		accessorKey: "shippingFee",
		header: ({ column }) => (
			<Button
				variant="ghost"
				size={"sm"}
				className="flex gap-1.5 h-8 py-1 hover:bg-gray-200"
				onClick={() =>
					column.toggleSorting(column.getIsSorted() === "asc")
				}
			>
				Frais de livraison
				<span className="px-1.5 text-xs bg-gray-200 border rounded-full border-dark/20">
					MAD
				</span>
				<ArrowUpDown className="flex-shrink-0 w-4 h-4 ml-1" />
			</Button>
		),
	},
	{
		accessorKey: "refusalFee",
		header: ({ column }) => (
			<div className="flex gap-1.5 items-end justify-center">
				Frais de refus
				<span className="px-1.5 text-xs bg-gray-200 border rounded-full border-dark/20">
					MAD
				</span>
			</div>
		),
	},
	{
		accessorKey: "returnFee",
		header: ({ column }) => (
			<div className="flex gap-1.5 items-end justify-center">
				Frais de retour
				<span className="px-1.5 text-xs bg-gray-200 border rounded-full border-dark/20">
					MAD
				</span>
			</div>
		),
	},
	{
		accessorKey: "deliveryTime",
		header: ({ column }) => (
			<div className="flex gap-1.5 items-end justify-center">
				Temps de livraison
				<span className="px-1.5 text-xs bg-gray-200 border rounded-full border-dark/20">
					JOURS
				</span>
			</div>
		),
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							className="w-8 h-8 p-0 focus:ring-offset-0 focus:ring-0"
						>
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="w-4 h-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="border-dark/20 text-foreground/80"
					>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() =>
								navigator.clipboard.writeText("Text-copied")
							}
						>
							Copier les tarifs
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Livrez ici</DropdownMenuItem>
						<DropdownMenuItem>En savoir plus</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
