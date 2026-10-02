#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "arbeitnow",
  boardId: "arbeitnow-official",
  domain: "arbeitnow.com",
  npmName: "zc-arbeitnow-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
