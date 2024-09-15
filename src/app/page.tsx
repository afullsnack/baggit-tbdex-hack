import { Container, Main, Section } from "@/components/craft";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, HandCoins, Users } from "lucide-react";
import Link from "next/link";
import React from "react";
// import Image from "next/image";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container className="grid gap-4 place-items-center">
          <Avatar className="size-20 flex">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback className="text-black">OM</AvatarFallback>
          </Avatar>
        <Button>Theme</Button>
        </Container>
        <Container className="grid gap-4">
          <ServicesCard externalLink="/services/loan" title="Asset Loans" description="Take short term loans on assets in your wallets" icon={<HandCoins className="size-8" />} />
          <ServicesCard externalLink="/services/otc" title="OTC P2P" description="Join the OTC P2P Movement, and start making returns on your assets" icon={<Users className="size-8" />} />
        </Container>
      </Section>
    </Main>
  );
}




const ServicesCard = ({
  title,
  description,
  externalLink,
  icon,
}: {
  title: string;
  description: string;
  externalLink: string;
  icon: React.ReactNode;
}) => {
  return (
    <Link href={externalLink}>
      <Card className="rounded-sm">
        <CardContent className="flex flex-col py-6 justify-center items-center gap-8 w-full">
          <div className="flex items-center gap-4 h-full justify-center w-full">
            {icon ?? <Avatar className="h-9 w-9 flex">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>}
            <div className="grid gap-1 my-auto">
              <p className="text-balance text-sm font-semibold leading-none">{title}</p>
              <p className="text-balance text-sm text-muted-foreground">
                {description}
              </p>
            </div>
            <div className="ml-auto font-medium">
              <ExternalLink />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
