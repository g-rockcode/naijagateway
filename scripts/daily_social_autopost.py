#!/usr/bin/env python3
"""
NaijaGateway — Daily Automated Social Media Broadcaster
Powered by G.Rock (Gbolahan Rock Olayiwola)
Official Contact: naijagateway.ng@gmail.com | +2347044956858

Runs daily via GitHub Actions (08:00, 13:00, 18:00 WAT) or locally.
Automatically broadcasts:
  1. Urgent Closing-Soon Portal Alerts (<= 5 Days Left)
  2. Daily Verified Nigerian Category News
  3. Recruitment & Scholarship Open Spotlights
"""

import json
import os
import urllib.request
import urllib.error
from datetime import datetime, timezone

DAILY_PAYLOADS = [
    {
        "slot": "08:00 WAT — Morning Red-Alert Deadline Roundup",
        "acronym": "PTDF / NA / NYSC",
        "title": "PTDF Overseas & Local Scholarships (2 Days Left) & Nigerian Army Recruitment (3 Days Left)",
        "url": "https://naijagateway.ng",
        "caption": (
            "🚨 URGENT NIGERIA DEADLINE ALERT (CLOSING WITHIN 5 DAYS):\n\n"
            "1️⃣ PTDF Overseas & Local MSc/PhD Scholarship — 2 Days Left (https://scholarship.ptdf.gov.ng)\n"
            "2️⃣ Nigerian Army Recruitment Portal — 3 Days Left (https://recruitment.army.mil.ng)\n"
            "3️⃣ NYIF Youth Investment Fund — 3 Days Left (https://fmyd.gov.ng)\n"
            "4️⃣ NYSC Integrated Mobilization — 4 Days Left (https://portal.nysc.org.ng)\n"
            "5️⃣ INEC Continuous Voter Registration (CVR) — 5 Days Left (https://cvr.inecnigeria.org)\n\n"
            "✅ View full requirements & apply directly via NaijaGateway: https://naijagateway.ng\n"
            "📩 Contact: naijagateway.ng@gmail.com | 📞 +2347044956858\n"
            "⚡ Powered by G.Rock (Gbolahan Rock Olayiwola)\n"
            "#NaijaGateway #NigeriaJobs #PTDF #NYSC #NigerianArmy #ScholarshipsNG"
        ),
    },
    {
        "slot": "13:00 WAT — Midday Verified Portal & Diaspora Spotlight",
        "acronym": "NIS / FMBN / NELFUND",
        "title": "International Passport Contactless Renewal, FMBN 6% Mortgage & NELFUND Student Loans",
        "url": "https://naijagateway.ng",
        "caption": (
            "🇳🇬 DAILY NAIJAGATEWAY CIVIC & DIASPORA DIGEST:\n\n"
            "🛂 NIS International Passport Portal: https://passport.immigration.gov.ng\n"
            "🎓 NELFUND Interest-Free Student Loan: https://nelf.gov.ng\n"
            "🏠 FMBN 6% National Housing & Diaspora Mortgage: https://www.fmbn.gov.ng\n"
            "🏥 NHIA GIFSHIP Family & Diaspora Health Insurance: https://www.nhia.gov.ng\n\n"
            "🔒 Stop searching endlessly or falling for fake clone sites. Access every verified Nigerian portal in one place: https://naijagateway.ng\n"
            "📩 Contact: naijagateway.ng@gmail.com | 📞 +2347044956858\n"
            "⚡ Powered by G.Rock (Gbolahan Rock Olayiwola)\n"
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
    slot_index = datetime.now(timezone.utc).hour % len(DAILY_PAYLOADS)
    post_item = DAILY_PAYLOADS[slot_index]

    print(f"[{now_str}] 🚀 Running NaijaGateway Daily Social Auto-Poster")
    print(f"Selected Slot: {post_item['slot']}")
    print("-" * 60)
    print(post_item["caption"])
    print("-" * 60)

    # 1. Telegram Channel Direct Broadcast (@NaijaGatewayAlerts)
    tg_token = os.environ.get("TELEGRAM_BOT_TOKEN", "").strip()
    tg_chat_id = os.environ.get("TELEGRAM_CHAT_ID", "@NaijaGatewayAlerts").strip()
    if tg_token:
        tg_url = f"https://api.telegram.org/bot{tg_token}/sendMessage"
        status, body = post_json(
            tg_url,
            {
                "chat_id": tg_chat_id,
                "text": post_item["caption"],
                "disable_web_page_preview": False,
            },
        )
        print(f"[Telegram -> {tg_chat_id}] HTTP {status}: {body[:160]}")
    else:
        print("[Telegram] Skipped (Set TELEGRAM_BOT_TOKEN secret in GitHub/environment to enable direct Telegram auto-posting).")

    # 2. Omnichannel Webhook (Make.com / Zapier / Buffer / n8n -> X, Facebook, Instagram, LinkedIn, TikTok, WhatsApp)
    webhook_url = os.environ.get("SOCIAL_OMNICHANNEL_WEBHOOK_URL", "").strip()
    if webhook_url:
        status, body = post_json(
            webhook_url,
            {
                "timestamp": now_str,
                "organization": "NaijaGateway",
                "website": "https://naijagateway.ng",
                "contactEmail": "naijagateway.ng@gmail.com",
                "contactPhone": "+2347044956858",
                "poweredBy": "G.Rock (Gbolahan Rock Olayiwola)",
                "slot": post_item["slot"],
                "title": post_item["title"],
                "acronym": post_item["acronym"],
                "caption": post_item["caption"],
                "platforms": [
                    "@NaijaGatewayNG (X)",
                    "NaijaGateway Official (Facebook)",
                    "NaijaGateway (+2347044956858 WhatsApp)",
                    "@NaijaGatewayAlerts (Telegram)",
                    "@NaijaGateway (Instagram)",
                    "@NaijaGateway (TikTok)",
                    "NaijaGateway Civic Hub (LinkedIn)",
                ],
            },
        )
        print(f"[Omnichannel Webhook] HTTP {status}: {body[:160]}")
    else:
        print("[Omnichannel Webhook] Skipped (Set SOCIAL_OMNICHANNEL_WEBHOOK_URL secret to forward to X, Facebook, Instagram, LinkedIn, TikTok & WhatsApp).")

    # 3. Facebook Page Direct Graph API (Optional)
    fb_page_id = os.environ.get("FACEBOOK_PAGE_ID", "").strip()
    fb_access_token = os.environ.get("FACEBOOK_PAGE_ACCESS_TOKEN", "").strip()
    if fb_page_id and fb_access_token:
        fb_url = f"https://graph.facebook.com/v19.0/{fb_page_id}/feed"
        status, body = post_json(
            fb_url,
            {
                "message": post_item["caption"],
                "link": post_item["url"],
                "access_token": fb_access_token,
            },
        )
        print(f"[Facebook Page Graph API] HTTP {status}: {body[:160]}")


if __name__ == "__main__":
    main()
