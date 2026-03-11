#!/usr/bin/env node
/**
 * update-gallery.js
 * Fetches the Airbnb listing page and extracts all photo URLs to update gallery-images.json.
 *
 * Usage:  node scripts/update-gallery.js
 *
 * Run this after uploading new photos to Airbnb, then commit the updated JSON.
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const LISTING_ID = '1627416696824647108';
const HOSTING_PREFIX = `Hosting-${LISTING_ID}`;
const AIRBNB_URL = `https://www.airbnb.com/rooms/${LISTING_ID}`;
const JSON_PATH = resolve(__dirname, '../src/assets/gallery-images.json');

async function fetchListingImages() {
  console.log(`Fetching Airbnb listing: ${AIRBNB_URL}`);

  const response = await fetch(AIRBNB_URL, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch listing: ${response.status} ${response.statusText}`);
  }

  const html = await response.text();

  // Extract image URLs from the page HTML/JSON data
  // Airbnb embeds photo data in script tags as JSON
  const imagePattern = new RegExp(
    `https://a0\\.muscache\\.com/im/pictures/hosting/${HOSTING_PREFIX}/original/([a-f0-9-]+\\.(?:jpeg|jpg|png|webp))`,
    'gi'
  );

  const matches = new Set();
  let match;
  while ((match = imagePattern.exec(html)) !== null) {
    matches.add(match[1]); // capture the filename (UUID.ext)
  }

  if (matches.size === 0) {
    console.warn('⚠ No images found. Airbnb may have changed their page structure.');
    console.warn('  You can manually update src/assets/gallery-images.json instead.');
    process.exit(1);
  }

  return [...matches];
}

function generateAltText(index, total) {
  const labels = [
    'Living Room', 'Living Room', 'Living Room', 'Living Room',
    'Kitchen', 'Kitchen', 'Kitchen',
    'Bedroom', 'Bedroom',
    'Bathroom', 'Bathroom',
    'Rooftop', 'Gym', 'Pool', 'Laundry'
  ];
  return labels[index] || `Photo ${index + 1}`;
}

async function main() {
  try {
    // Read existing config to preserve manual alt text edits
    let existing = { images: [] };
    try {
      existing = JSON.parse(readFileSync(JSON_PATH, 'utf-8'));
    } catch {
      // First run - no existing file
    }

    const existingMap = new Map(
      existing.images?.map(img => [img.filename, img.alt]) || []
    );

    const filenames = await fetchListingImages();

    console.log(`\n✓ Found ${filenames.length} images\n`);

    const images = filenames.map((filename, i) => ({
      id: i + 1,
      filename,
      alt: existingMap.get(filename) || generateAltText(i, filenames.length),
    }));

    const config = {
      listingId: LISTING_ID,
      baseUrl: `https://a0.muscache.com/im/pictures/hosting/${HOSTING_PREFIX}/original/`,
      lastUpdated: new Date().toISOString(),
      images,
    };

    writeFileSync(JSON_PATH, JSON.stringify(config, null, 2) + '\n');
    console.log(`✓ Updated ${JSON_PATH}`);
    console.log(`  ${images.length} images saved`);
    console.log(`  Last updated: ${config.lastUpdated}`);
    console.log('\nTip: Review alt text in gallery-images.json for better SEO & accessibility.');
  } catch (err) {
    console.error('✗ Error:', err.message);
    process.exit(1);
  }
}

main();
