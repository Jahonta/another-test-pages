function getAdrcid() {
  // return crypto.randomUUID();
  return Math.random();
}

async function injectContent() {
  await window.sharedStorage.worklet.addModule("worklet.js");

  window.sharedStorage.set("adrcid", getAdrcid(), {
    ignoreIfPresent: true,
  });

  const fencedFrameConfig = await window.sharedStorage.selectURL(
    "adrcid-test",
    [
      { url: "./frame-1.html" },
      { url: "./frame-2.html" },
    ],
    {
      resolveToConfig: true,
    },
  );

  const frame = document.createElement("fencedframe");
  frame.config = fencedFrameConfig;
  document.getElementById("slot").append(frame);
}

injectContent();
