const data = [
    {
        id:1,
        Name: "Crash Landing on You",
        src:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdxN36ttYwRQ2x5Gd4Vf8-kZZPwvMCRS0-dvt8BDlxSa3Fr3jfZVJ96CP-or5s67yFfK9Gq8Csmf5y8DtrXrGFkGH7JAif9HORfsvZUSI3yK-TL54cg3hK9Pb67utRRr04Wa.jpg?r=2b0",
      links: "https://www.netflix.com/in/title/81159258"
    },
    {
        id:2,
        Name: "It's Okay to Not Be Okay",
        src: "https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQEjJfnMi9TXaKoF9qCwqJFr7u4os-0jU4BdQtPpKqA4qlXipyQRbn6x12tiWr3G93tqhHmT_tHefwiPgvORm0tOeEsw-6ZezuwbiWZ6iih6sdwapOruT1QksFSIehXBscq6.jpg?r=5ad",
        links: "https://www.netflix.com/in/title/81243992"
    },
    {
        id:3,
        Name: "Strong Girl Nam-soon",
        src: "https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcFoaztNqXLBlu5wt61mqadk_CMGU4W0UBALtAQs2YG4yJBNVNHmNiB8RtqnPPvYbZ8tdN2rFU6h6Zs7WuIv7c74C74zQeggvD2BB4NEIknREGmNptnt7-_E5Rt41ZyjsFMB.jpg?r=b45",
        links: "https://www.netflix.com/in/title/81697981"
    },
    {
        id:4,
        Name: "My Demon",
        src:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQDpT6t8mS6Bent2_DvrUxLtm_sov8E2N7qazbGw6iISJLJh1LnGOJKOzi6fY5gxCqzu8tmDIKZ3I3Po5e6jKRYjIC2N1Ahs76BHqWgeTUV-3JNMvKwq1KfxjoW3E48X3LZe.jpg?r=44c" ,
         links: "https://www.netflix.com/in/title/81716080"
    },
    {
        id:5,
        Name: "The Legend of the Blue Sea",
        src: "https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWCYnURUsUE0J2iYJcT6KP66ngK8L4nBjNEtD0w5vJh4XOcqOY-5t14SqJMZ0nXqcbaSPx56GRJiBgB6yDpU8N_4L6TIZJgbSLA.jpg?r=fbc",
        links: "https://www.netflix.com/in/title/81012551"
    },
    {
        id:6,
        Name: "Goblin",
        src: "https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaRXu1r_oJWmK96V9oqkvjn_gjPCEGlQmsDAWVHgYBpv6q1Foc_ZgZRx-8k9LMrsqmxP4pYp8R51DP7qBGUH9d0nzC9WofxiKrE.jpg?r=a04",
        links: "https://www.netflix.com/in/title/81012510"
    },
    {
        id:7,
        Name: "Vincenzo",
        src:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSitjBhxTkmKXKaLTESIa5iQ58nAyggjQUOYupjSwRe4gUR-_YAITsOHD6tTTZNuBfh0ssBesZYcvf9X7kTOjYj9LklBcD2gEr8rFmNxUtSBec4jGBl4Faf5hCl09TqioZr0.jpg?r=c8b",
         links: "https://www.netflix.com/in/title/81365087"
    },
    {
        id:8,
        Name: "Put Ur Head on My Shoulder",
        src: "https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaMBinE8XLw1zVR2O82xucQGlV-mvnL8jjoNrPbBgf29sNk4wDQVZi4HwEw_roZ5OSV1ANwb8e11R1keMbOEdIykxTorYHhO1f4.jpg?r=293",
        links: "https://www.netflix.com/in/title/81200229"
    },
    {
        id:9,
        Name: "The Glory",
         src: "https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVfPGa77dyP88-Xt_q-1tFannPOu5z0IK0DpvzCAZQUIPmWD5S8H2COg1wpWnIdBmRnxz3rFkobaI53h0zDaW9A7bNskvscjOkM9XWv7TT-_7KKnGgQqLt680sXelr48HssQ.jpg?r=3d2",
        links: "https://www.netflix.com/in/title/81519223"
    },
    {
        id:10,
        Name: "Meteor Garden",
      src: "https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQzGqyKKphEioJRaxaLX_o1RtM5Ehn8TChi_PVcUBBXrifU4PE-ZdeQEQe9w4GMFAeb5kASzySqpWR-n--PMQ0xjEeKr-MuKmHXbrx1Bc12PabH-oV5K_sBJl5rsh_Q9olwA.jpg?r=81f",
      links: "https://www.netflix.com/in/title/81005504"
    },
    {
        id:11,
        Name: "A Love so Beautiful",
      src: "https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABW0JjcsSry8AmeVeAFQzMCjjnLfOGwKMlX7cHOqWr17JK9MPab8gGOIt6e5HBkVRKwHe-Hy1NsvcuNnmF0j9zZ6ml8JaRHF7kCU.jpg?r=11a",
      links: "https://www.netflix.com/in/title/80239640"
    },
    {
      id:12,
      Name:"Start-Up",
      src:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfmu2vuIZlEUD7-cNVoUbcplVDy0q8ps8oDrkCQcReu3HFCoGvhoXWpuAo18EQ_Fknm5Pm7PFUIxHypScZ5PWBHbTdmUIx1OEnIG1vCPjanJMQuYzhxgY0iDn7QaDjHmRBNF.jpg?r=30",
      links:"https://www.netflix.com/in/title/81290293"
    },
    {
      id:13,
      Name:"Doona",
      src:"https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABU6Xd4ExbTm-Qle9xy0p9SwZVIAvMOo4BaM8tj-GnG3plpxLB2zKRwDpgemByam-mWkvpM8DacWia3FGHGFAcEhI1yxYUc9ro6roI-gzQzIoxIYB1fJLmREn1vunhZ6i-WwW.jpg?r=2e5",
      links:"https://www.netflix.com/in/title/81595046"
    },
    {
      id:14,
      Name:"School 2017",
      src:"https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbgcINJfBQuiuE4AZSbM8pE8Zm44B52uD5e2ICvWHaDlcshG3w5QVixvfgAkaIcOe95dt-FMJRRD_-IeJX3IKBRECyOQDcjPmfA.jpg?r=a5a",
      links:"https://www.netflix.com/in/title/81093144"
    },
    {
      id:15,
      Name:"Suspicious Partner",
      src:"https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcBYzqMz-S_iycapxAA5CxudivkmYN1c2NiIyw9nJTnFKTWwbdziRYNvIq2Yt2KRDvF_d4NnaCzyfqbubkOqxvuAyOrjsDuxibE.jpg?r=a26",
      links:"https://www.netflix.com/in/title/80998940"
    }
]

export default data