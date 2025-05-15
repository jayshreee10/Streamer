"use client";

import { BroadcastDialog } from "@/components/broadcast-dialog";
import { IngressDialog } from "@/components/ingress-dialog";
import { JoinDialog } from "@/components/join-dialog";
import { Button, Flex, Text } from "@radix-ui/themes";

export function HomeActions() {
  const gradientButton =
    "bg-gradient-to-r from-violet-9 to-indigo-9 text-white shadow hover:opacity-90 transition cursor-pointer";

  const outlineButton = `
    text-gray-12 border border-gray-6 
    hover:bg-gradient-to-r hover:from-violet-9 hover:to-indigo-9 
    hover:text-white hover:shadow 
    transition cursor-pointer
  `;

  return (
    <Flex direction="column" gap="4" justify="center" align="center">
      <Flex gap="2" wrap="wrap" justify="center">
        <BroadcastDialog>
          <Button size="3" className={gradientButton}>
            Stream from browser
          </Button>
        </BroadcastDialog>

        <IngressDialog>
          <Button size="3" className={gradientButton}>
            Stream from OBS
          </Button>
        </IngressDialog>
      </Flex>

      <Text size="1">- OR -</Text>

      <JoinDialog>
        <Button
          variant="outline"
          size="3"
          className={`w-full max-w-xs ${outlineButton}`}
        >
          Join existing stream
        </Button>
      </JoinDialog>
    </Flex>
  );
}
