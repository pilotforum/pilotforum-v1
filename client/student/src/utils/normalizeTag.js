export default function normalizeTag(tag) {
  return tag.trim().replace(/ +/gm, "-").toLowerCase();
}
