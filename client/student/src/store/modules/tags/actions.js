export function loadTagsRequest() {
  return {
    type: '@tags/LOAD_TAGS_REQUEST',
  }
}

export function loadTagsSuccess(tags) {
  return {
    type: '@tags/LOAD_TAGS_SUCCESS',
    payload: { tags },
  }
}
