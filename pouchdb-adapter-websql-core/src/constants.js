function quote(str) {
  return "'" + str + "'";
}

var ADAPTER_VERSION = 7; // used to manage migrations

// The object stores created for each database
// DOC_STORE stores the document meta data, its revision history and state
var DOC_STORE = quote("document-store");
// BY_SEQ_STORE stores a particular version of a document, keyed by its
// sequence id
var BY_SEQ_STORE = quote("by-sequence");
// Where we store attachments
var ATTACH_STORE = quote("attach-store");
var LOCAL_STORE = quote("local-store");
var META_STORE = quote("metadata-store");
// where we store many-to-many relations between attachment
// digests and seqs
var ATTACH_AND_SEQ_STORE = quote("attach-seq-store");

module.exports = {
  ADAPTER_VERSION,
  DOC_STORE,
  BY_SEQ_STORE,
  ATTACH_STORE,
  LOCAL_STORE,
  META_STORE,
  ATTACH_AND_SEQ_STORE,
};
