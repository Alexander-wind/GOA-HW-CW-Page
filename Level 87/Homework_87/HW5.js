// შექმენი ობიექტი:
// const profile = {
//   username: "kocho",
//   followers: 120,
//   verified: false
// };
// შექმენი მისი ასლი spread-ით.
// შემდეგ შეცვალე ასლში followers → 500.
// შეამოწმე — ორიგინალი ობიექტი შეიცვალა თუ არა?

const profile = {
  username: "kocho",
  followers: 120,
  verified: false
};

const profile1 = {
    ...profile, followers: 500
}