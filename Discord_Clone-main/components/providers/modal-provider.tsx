"use client";

import { useEffect, useState } from "react";
import { CreateServerModal } from "../modals/create-server-model";
import { InviteModal } from "../modals/invite-modal";
import { EditServerModal } from "../modals/edit-server-model";
import { MembersModal } from "../modals/members-modal";
import { CreateChannelModal } from "../modals/create-channel-model";
import { LeaveServerModal } from "../modals/leave-server-model";
import { DeleteServerModal } from "../modals/delete-server-model";
import { DeleteChannelModal } from "../modals/delete-channel-model";
import { EditChannelModal } from "../modals/edit-channel-model";
import { MessageFileModal } from "../modals/messgae-file-model";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <CreateServerModal />
            <InviteModal />
            <EditServerModal />
            <MembersModal />
            <CreateChannelModal />
            <LeaveServerModal />
            <DeleteServerModal />
            <DeleteChannelModal />
            <EditChannelModal />
            <MessageFileModal />
        </>
    )
}