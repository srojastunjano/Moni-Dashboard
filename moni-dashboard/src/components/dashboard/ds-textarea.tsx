import { Button } from "@/src/components/ui/button"
import { Textarea } from "@/src/components/ui/textarea"
 
export default function TextArea() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Escribe tu mensaje aqui." />
      <Button>Enviar</Button>
    </div>
  )
}

export {TextArea}