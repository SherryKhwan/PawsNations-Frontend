"use client";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createProjectSchema } from "@/lib/createProjectSchema";
import { useFormContext } from "react-hook-form";
import { Divider, Input, Textarea, Select, SelectItem, Selection, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import ProjectCreationFAQ from "@/components/projectCreationFAQ";
import saveProject from "@/lib/api/saveProject";
import { getAllGenres } from "@/lib/genres";
import { Genre, Person } from "@/types/data";
import { json } from "stream/consumers";
import { getAllCrew } from "@/lib/crew";
import saveCrew from "@/lib/api/saveCrew";

type Props = {
    label: string,
    arry: Person[],
    setSelectedArry: React.Dispatch<React.SetStateAction<Selection>>,
    handleCreate,
    selectedArry: Selection,
    userType: string,
    register,
    errors
}

export default function SelectWithModal({ label, userType, arry, setSelectedArry, selectedArry, register, errors, handleCreate }: Props) {

    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleSubmit = async (onClose) => {
        await handleCreate(first, last, userType)
        onClose();
    }

    return (
        <div className="flex items-center my-2 gap-2">
            <div style={{ height: '90px' }} className="w-4/5" >

                <Select
                    label={label}
                    {...register}
                    labelPlacement="outside"
                    // style={{height: '200px'}}
                    variant="flat"
                    placeholder={`Select ${label}`}
                    errorMessage={errors}
                    selectionMode="multiple"
                    selectedKeys={selectedArry}
                    className=" pb-0"
                    onSelectionChange={setSelectedArry}
                >
                    {arry?.map((arry) => (
                        <SelectItem key={arry._id} value={arry._id}>
                            {arry.firstName + " " + arry.lastName}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            <Button
                color="default"
                className="w-1/5 "
                onPress={onOpen}
            >+
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add new {label}</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    value={first}
                                    onChange={e => setFirst(e.target.value)}
                                    label="First Name"
                                    placeholder="Enter First Name"
                                    variant="bordered"
                                />
                                <Input
                                    label="Last Name"
                                    value={last}
                                    onChange={e => setLast(e.target.value)}
                                    placeholder="Enter Last Name"
                                    variant="bordered"
                                />
                                <div className="flex py-2 px-1 justify-between">
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={() => { handleSubmit(onClose) }}>
                                    Create
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>

    )
}