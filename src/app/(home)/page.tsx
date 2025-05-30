import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col gap-4">
      <div>
        <Button variant='elevated'>Hello button</Button>
      </div>
      <div>
        <Textarea placeholder="I am a textarea"/>
      </div>
      <div>
        <Input placeholder="I am an input"/>
      </div>
    </div>
  );
}
