import { Component } from '@angular/core';
import { ethers } from 'ethers';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-metamask',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metamask.component.html',
  styleUrl: './metamask.component.css'
})
export class MetamaskComponent {
  account: string | null = null;
  isMetamaskInstalled = false;

  constructor() {
    this.isMetamaskInstalled = typeof (window as any).ethereum !== 'undefined';
  }

  async connectMetamask() {
    if (this.isMetamaskInstalled) {
      try {
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        this.account = await signer.getAddress();
      } catch (error) {
        console.error("Error conectando con Metamask:", error);
      }
    } else {
      alert("Por favor, instala Metamask.");
    }
  }

}
