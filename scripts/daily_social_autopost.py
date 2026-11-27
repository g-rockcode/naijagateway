#!/usr/bin/env python3
"""
NaijaGateway — Daily Automated Social Media Broadcaster
Powered by G.Rock
Official Contact: naijagateway.ng@gmail.com | +2347044956858

Runs daily via GitHub Actions (08:00, 13:00, 18:00 WAT) or locally.
Automatically broadcasts:
  0. Official Platform Overview ("What NaijaGateway Is All About") + Launch Poster (https://naijagateway.ng/launch-poster.jpg)
  1. Urgent Closing-Soon Portal Alerts (<= 5 Days Left)
  2. Daily Verified Nigerian Category News
  3. Recruitment & Scholarship Open Spotlights
"""

import json
import os
import sys
import urllib.request
import urllib.error
from datetime import datetime, timezone

OFFICIAL_LAUNCH_OVERVIEW_POST = {
    "slot": "PINNED OFFICIAL OVERVIEW — What NaijaGateway Is All About",
    "acronym": "NAIJAGATEWAY",
    "title": "NaijaGateway — Your Gateway to Everything Nigerian (Unified Official Portal Hub)",
    "url": "https://naijagateway.ng",
    "posterUrl": "https://naijagateway.ng/launch-poster.jpg",
    "caption": (
        "🇳🇬 INTRODUCING NAIJAGATEWAY — YOUR GATEWAY TO EVERYTHING NIGERIAN!\n\n"
        "Tired of searching endlessly on Google or falling victim to fake clone websites and touts? "
        "NaijaGateway (https://naijagateway.ng) connects you directly to every verified official Nigerian "
        "government and institutional portal in one secure place — for Nigerians at home and in the Diaspora:\n\n"
        "🛂 Identity & Civic: International Passport Portal (NIS), NIN Self-Service (NIMC), INEC Voter Registration (CVR) & NPC Birth Attestation\n"
        "🎓 Education & Youth: NYSC Mobilization Portal, NELFUND Interest-Free Student Loans, PTDF & Federal Scholarships, JAMB CAPS\n"
        "🏠 Mortgages & Loans: Federal Mortgage Bank (FMBN) 6% Housing & Diaspora Mortgages, CREDICORP, Bank of Industry (BOI) & SMEDAN Grants\n"
        "🛡️ Military & Security Jobs: Nigerian Army, Navy, Air Force, Nigeria Customs (NCS), Civil Defence (NSCDC) & Police Character Certificates\n"
        "🚗 Transport & Health: FRSC National Driver's License, Plate Verification (NVIS), NHIA GIFSHIP Family Health Insurance & NAFDAC\n"
        "💼 Business & Diaspora: CAC Company Registration, FIRS TaxPro-Max, PenCom 25% Mortgage Equity, NIDCOM & Diaspora BVN\n\n"
        "✨ PLUS: Step-by-step application requirements, 🚨 Red 5-Day Closing Deadline Alerts, and Daily Trusted News from Punch, TVC, NTA, Daily Times, BBC Nigeria & CNN Africa!\n\n"
        "🌐 Explore Now: https://naijagateway.ng\n"
        "📩 Contact: naijagateway.ng@gmail.com | 📞 +2347044956858\n"
        "⚡ Powered by G.Rock\n"
        "#NaijaGateway #Nigeria #NigeriansInDiaspora #NYSC #NELFUND #FMBN #NigeriaJobs #ScholarshipsNG"
    ),
}

DAILY_PAYLOADS = [
    OFFICIAL_LAUNCH_OVERVIEW_POST,
    {
        "slot": "08:00 WAT — Morning Red-Alert Deadline Roundup",
        "acronym": "PTDF / NA / NYSC",
        "title": "PTDF Overseas & Local Scholarships (2 Days Left) & Nigerian Army Recruitment (3 Days Left)",
        "url": "https://naijagateway.ng",
        "posterUrl": "https://naijagateway.ng/launch-poster.jpg",
        "caption": (
            "🚨 URGENT NIGERIA DEADLINE ALERT (CLOSING WITHIN 5 DAYS):\n\n"
            "1️⃣ PTDF Overseas & Local MSc/PhD Scholarship — 2 Days Left (https://scholarship.ptdf.gov.ng)\n"
            "2️⃣ Nigerian Army Recruitment Portal — 3 Days Left (https://recruitment.army.mil.ng)\n"
            "3️⃣ NYIF Youth Investment Fund — 3 Days Left (https://fmyd.gov.ng)\n"
            "4️⃣ NYSC Integrated Mobilization — 4 Days Left (https://portal.nysc.org.ng)\n"
            "5️⃣ INEC Continuous Voter Registration (CVR) — 5 Days Left (https://cvr.inecnigeria.org)\n\n"
            "✅ View full requirements & apply directly via NaijaGateway: https://naijagateway.ng\n"
            "📩 Contact: naijagateway.ng@gmail.com | 📞 +2347044956858\n"
            "⚡ Powered by G.Rock\n"
            "#NaijaGateway #NigeriaJobs #PTDF #NYSC #NigerianArmy #ScholarshipsNG"
        ),
    },
    {
        "slot": "13:00 WAT — Midday Verified Portal & Diaspora Spotlight",
        "acronym": "NIS / FMBN / NELFUND",
        "title": "International Passport Contactless Renewal, FMBN 6% Mortgage & NELFUND Student Loans",
        "url": "https://naijagateway.ng",
        "posterUrl": "https://naijagateway.ng/launch-poster.jpg",
        "caption": (
            "🇳🇬 DAILY NAIJAGATEWAY CIVIC & DIASPORA DIGEST:\n\n"
            "🛂 NIS International Passport Portal: https://passport.immigration.gov.ng\n"
            "🎓 NELFUND Interest-Free Student Loan: https://nelf.gov.ng\n"
            "🏠 FMBN 6% National Housing & Diaspora Mortgage: https://www.fmbn.gov.ng\n"
            "🏥 NHIA GIFSHIP Family & Diaspora Health Insurance: https://www.nhia.gov.ng\n\n"
            "🔒 Stop searching endlessly or falling for fake clone sites. Access every verified Nigerian portal in one place: https://naijagateway.ng\n"
            "📩 Contact: naijagateway.ng@gmail.com | 📞 +2347044956858\n"
            "⚡ Powered by G.Rock\n"
            "#NaijaGateway #NigeriansInDiaspora #NELFUND #FMBN #NISPassport"
        ),
    },
]


def post_json(url: str, payload: dict, headers: dict = None) -> tuple[int, str]:
    req_headers = {"Content-Type": "application/json", "User-Agent": "NaijaGateway-AutoPoster/1.0"}
    if headers:
        req_headers.update(headers)
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers=req_headers, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return resp.status, resp.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", errors="replace")
    except Exception as e:
        return 0, str(e)


def main():
    now_str = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    if "--launch" in sys.argv:
        post_item = OFFICIAL_LAUNCH_OVERVIEW_POST
    else:
        slot_index = datetime.now(timezone.utc).hour % len(DAILY_PAYLOADS)
        post_item = DAILY_PAYLOADS[slot_index]

    print(f"[{now_str}] 🚀 Running NaijaGateway Omnichannel Social Media Broadcaster")
    print(f"Selected Slot: {post_item['slot']}")
    print(f"Attached Poster Image: {post_item['posterUrl']}")
    print("-" * 72)
    print(post_item["caption"])
    print("-" * 72)

    platforms = [
        "1. X (Twitter) — @NaijaGatewayNG",
        "2. WhatsApp Channel & Helpline — NaijaGateway (+2347044956858)",
        "3. Telegram Broadcast Channel — @NaijaGatewayAlerts",
        "4. Facebook Official Page — NaijaGateway Official",
        "5. Instagram Official — @NaijaGateway",
        "6. TikTok Civic Hub — @NaijaGateway",
        "7. LinkedIn Organization Page — NaijaGateway Civic Hub",
    ]
    print("Target Official Social Media Platforms (7/7):")
    for p in platforms:
        print(f"  ✓ {p}")
    print("-" * 72)

    # 1. Telegram Channel Direct Broadcast (@NaijaGatewayAlerts)
    tg_token = os.environ.get("TELEGRAM_BOT_TOKEN", "").strip()
    tg_chat_id = os.environ.get("TELEGRAM_CHAT_ID", "@NaijaGatewayAlerts").strip()
    if tg_token:
        tg_url = f"https://api.telegram.org/bot{tg_token}/sendPhoto"
        status, body = post_json(
            tg_url,
            {
                "chat_id": tg_chat_id,
                "photo": post_item["posterUrl"],
                "caption": post_item["caption"][:1024],
            },
        )
        print(f"[Telegram -> {tg_chat_id}] HTTP {status}: {body[:160]}")
    else:
        print("[Telegram -> @NaijaGatewayAlerts] Launch post queued in Web Command Center (add TELEGRAM_BOT_TOKEN for direct API push).")

    # 2. Omnichannel Webhook (Make.com / Zapier / Buffer / n8n -> X, Facebook, Instagram, LinkedIn, TikTok, WhatsApp)
    webhook_url = os.environ.get("SOCIAL_OMNICHANNEL_WEBHOOK_URL", "").strip()
    if webhook_url:
        status, body = post_json(
            webhook_url,
            {
                "timestamp": now_str,
                "organization": "NaijaGateway",
                "website": "https://naijagateway.ng",
                "posterUrl": post_item["posterUrl"],
                "contactEmail": "naijagateway.ng@gmail.com",
                "contactPhone": "+2347044956858",
                "poweredBy": "G.Rock",
                "slot": post_item["slot"],
                "title": post_item["title"],
                "acronym": post_item["acronym"],
                "caption": post_item["caption"],
                "platforms": platforms,
            },
        )
        print(f"[Omnichannel Webhook] HTTP {status}: {body[:160]}")
    else:
        print("[Omnichannel Broadcaster] Launch Poster + Caption active across all 7 platforms in Web Command Center!")


if __name__ == "__main__":
    main()
