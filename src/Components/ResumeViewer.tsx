import { Badge, Group, Text, Image, Indicator, Modal, Button, ScrollArea, ActionIcon, Tooltip } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { Document, Page } from 'react-pdf';


const ResumeViewer = (props: any) => {
    return (
        <Modal.Root size="auto" className="font-mono" scrollAreaComponent={ScrollArea.Autosize} opened={props.opened} onClose={props.close}>
            <Modal.Overlay />
            <Modal.Content className="!rounded-3xl">
                <Modal.Header className="!bg-bgColor !rounded-tl-3xl !rounded-tr-3xl !border-2 !border-b-0  !border-primaryColor">
                    <Modal.Title data-autofocus className="flex gap-3 items-center !text-4xl text-white !font-bold"> Resume
                        <Tooltip withArrow transitionProps={{ duration: 200 }} label="Download Resume" position="right">
                            <ActionIcon component="a" href="/saranjeetCV.pdf" download="Saranjeet Mondal" variant="outline" radius="md" aria-label="Settings" color="#64ffda">
                                <IconDownload />
                            </ActionIcon>
                            </Tooltip>
                    </Modal.Title>
                    <Modal.CloseButton className="!bg-bgColor !text-red-500" />
                </Modal.Header>
                <Modal.Body className="!pt-3 !bg-bgColor !rounded-bl-3xl !rounded-br-3xl !border-2 !border-t-0  !border-primaryColor">
                    <Document file="/saranjeetCV.pdf" >
                        <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} />
                    </Document>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    )
}
export default ResumeViewer;