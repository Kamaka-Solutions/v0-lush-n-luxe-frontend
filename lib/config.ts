/**
 * Launch phase toggle.
 *
 * PHASE_1 = true  → Pre-launch mode: products are not yet available.
 *   - Hero shows a single "Explore Our Collections" CTA
 *   - Navigation hides Shop, B2B and Subscription
 *   - The Shop experience is replaced by a "Coming Soon" Collections page
 *   - "Shop Now" CTAs become "Enquire Now" (linking to Contact)
 *   - The footer is simplified to functional links only
 *
 * PHASE_1 = false → Full experience: restores Shop, B2B, Subscription,
 *   product catalogue, "Shop Now" CTAs and the full footer automatically.
 *
 * Nothing is deleted — flip this flag when products arrive.
 */
export const PHASE_1 = true;
