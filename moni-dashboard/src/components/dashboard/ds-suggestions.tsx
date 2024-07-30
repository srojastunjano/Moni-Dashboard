import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/src/components/ui/drawer"
  import TextArea from "@/src/components/dashboard/ds-textarea";

  export default function AlgoMal(){
    return (
        <Drawer>
        <DrawerTrigger><h5 className="text-xs">ALGO MAL?</h5></DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Cuentanos!!</DrawerTitle>
              <DrawerDescription>Lo resolveremos lo antes posible.</DrawerDescription>
              <TextArea />
            </DrawerHeader>
            <DrawerFooter>
            <DrawerClose>
            </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
    )
}

export {AlgoMal}