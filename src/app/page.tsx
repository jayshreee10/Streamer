import { HomeActions } from "@/components/home-actions";
import { KeyboardIcon, GlobeIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Container,
  Flex,
  Kbd,
  Link,
  Text,
  Box,
  Badge,
  Grid,
} from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <Box className="border-b border-gray-6 py-3 px-6">
        <Flex align="center" gap="2">
          <Text
            size="5"
            weight="bold"
            className="bg-gradient-to-r from-violet-9 to-indigo-9 bg-clip-text text-transparent"
          >
            LiveStream
          </Text>
          <Badge size="1" color="blue" variant="soft" className="ml-2">
            BETA
          </Badge>
        </Flex>
      </Box>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center">
        <Container>
          <Grid
            columns={{ initial: "1", md: "2" }}
            gap="8"
            className="items-center"
          >
            {/* Left side - info */}
            <Flex direction="column" gap="4" className="max-w-md">
              <Text
                size="8"
                weight="bold"
                className="tracking-tight text-gray-12"
              >
                Premium video meetings
              </Text>
              <Text size="3" className="text-gray-11">
                A reliable and secure livestreaming platform for everyone. Start
                and join broadcasts directly from your browser.
              </Text>
              <Box className="mt-4">
                <Flex align="center" gap="2" className="text-gray-11 mb-2">
                  <KeyboardIcon />
                  <Text size="2">
                    Press <Kbd>⌘ C</Kbd> to toggle dark/light mode
                  </Text>
                </Flex>
              </Box>
            </Flex>

            {/* Right side - action buttons */}
            <Box className="bg-gray-3 rounded-lg p-6 border border-gray-6">
              <Flex direction="column" gap="5">
                <Text size="5" weight="medium" className="text-center">
                  Start or join a broadcast
                </Text>
                <HomeActions />
              </Flex>
            </Box>
          </Grid>
        </Container>
      </div>

      {/* Footer */}
      <Box className="fixed bottom-0 w-full border-t border-gray-6 py-3 px-6 bg-background">
        <Flex justify="between" align="center">
          <Flex gap="4">
            <Flex align="center" gap="1" className="text-gray-11">
              <GlobeIcon />
              <Text size="1">
                Powered by{" "}
                <Link
                  href="https://livekit.io/cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-9"
                >
                  LiveKit Cloud
                </Link>
              </Text>
            </Flex>
          </Flex>

          <Flex align="center" gap="1" className="text-gray-11">
            <GitHubLogoIcon />
            <Text size="1">
              <Link
                href="https://github.com/livekit-examples/livestream"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-9"
              >
                Clone this app
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </main>
  );
}
